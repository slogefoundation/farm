import React, { useEffect, useCallback } from 'react'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import { Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading, BaseLayout } from '@wdefifinancebsc/uikit'
import { BLOCKS_PER_YEAR, KIWI_PER_BLOCK, KIWI_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceKiwiBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps {
  tokenMode?: boolean
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const kiwiPrice = usePriceKiwiBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
  const Cards = styled(BaseLayout)`
    align-items: stretch;
    justify-content: stretch;
    margin-bottom: 48px;

    & > div {
      grid-column: span 6;
      width: 100%;
    }

    ${({ theme }) => theme.mediaQueries.sm} {
      & > div {
        grid-column: span 8;
      }
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      & > div {
        grid-column: span 6;
      }
    }
  `
  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const kiwiPriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === KIWI_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const kiwiRewardPerBlock = KIWI_PER_BLOCK.times(farm.poolWeight)
        const kiwiRewardPerYear = kiwiRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = kiwiPriceVsBNB.times(kiwiRewardPerYear).div(farm.lpTotalInQuoteToken)

        if (farm.quoteTokenSymbol === QuoteToken.USDT || farm.quoteTokenSymbol === QuoteToken.USDC) {
          apy = kiwiPriceVsBNB.times(kiwiRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice)
        } else if (farm.quoteTokenSymbol === QuoteToken.SLOGE) {
          apy = kiwiRewardPerYear.div(farm.lpTotalInQuoteToken)
        } else if (farm.dual) {
          const kiwiApy =
            farm && kiwiPriceVsBNB.times(kiwiRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
          const dualApy =
            farm.tokenPriceVsQuote &&
            new BigNumber(farm.tokenPriceVsQuote)
              .times(farm.dual.rewardPerBlock)
              .times(BLOCKS_PER_YEAR)
              .div(farm.lpTotalInQuoteToken)

          apy = kiwiApy && dualApy && kiwiApy.plus(dualApy)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          kiwiPrice={kiwiPrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, farmsLP, account, kiwiPrice, ethereum],
  )

  return (
    <Page>
      <div>
        <FlexLayout>
          <Route exact path={`${path}`}>
            <TotalValueLockedCard />

            {farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
    </Page>
  )
}

export default Farms
