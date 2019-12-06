import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 1.45rem 1.0875rem;
`

const Viewport = ({ ...props }) => (
  <StyledDiv
    {...props}
  />
)

export default Viewport
