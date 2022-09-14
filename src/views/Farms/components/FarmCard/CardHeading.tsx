import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@wdefifinancebsc/uikit'
import { CommunityTag, CoreTag, NoFeeTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
  depositFee?: number
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Heading style={{ fontSize: '17px' }} mb="4px">
        {lpLabel}
      </Heading>
      <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
    </Wrapper>
  )
}

export default CardHeading
