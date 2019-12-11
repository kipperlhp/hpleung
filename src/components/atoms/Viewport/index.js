import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  max-width: 1024px;
  padding: 1.45rem 1.0875rem;
`

const Viewport = ({ ...props }) => (
  <StyledFlex
    {...props}
  />
)

export default Viewport
