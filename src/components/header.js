import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import Viewport from './atoms/Viewport'
import Text from './atoms/Text'

const StyledHeader = styled.header`
  background: ${palette('primary', 0)};
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Viewport>
      <Text variant="h3" bold>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </Text>
    </Viewport>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
