import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from '@wdefifinancebsc/uikit'
import useI18n from 'hooks/useI18n'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  pid?: number
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const StakeAction: React.FC<FarmCardActionsProps> = ({ stakedBalance, tokenBalance, tokenName, pid }) => {
  const TranslateString = useI18n()
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = rawStakedBalance.toLocaleString()

  const [onPresentDeposit] = useModal(<DepositModal max={tokenBalance} onConfirm={onStake} tokenName={tokenName} />)
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={tokenName} />,
  )

  const renderStakingButtons = () => {
    return rawStakedBalance === 0 ? (
      <Button onClick={onPresentDeposit}>{TranslateString(999, 'Stake LP')}</Button>
    ) : (
      <IconButtonWrapper>
        <IconButton style={{width:"120px"}} variant="tertiary" onClick={onPresentWithdraw} mr="6px">
          Withdraw
        </IconButton>
        <IconButton style={{width:"120px"}} variant="tertiary" onClick={onPresentDeposit}>
          Deposit
        </IconButton>
      </IconButtonWrapper>
    )
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
      {/* <Heading color={rawStakedBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}</Heading> */}
      {renderStakingButtons()}
    </Flex>
  )
}

export default StakeAction
