import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp, prop } from 'styled-tools'
import { Link as ScrollLink } from 'react-scroll'
import ReactResizeDetector from 'react-resize-detector'
import Fade from 'react-reveal/Fade'
import { Flex } from '@rebass/grid'
import Viewport from './atoms/Viewport'
import Text from './atoms/Text'
import Icon from './atoms/Icon'

const StyledViewport = styled(Viewport)`
  padding: 0.7rem 1.0875rem;
`

const StyledHeader = styled.header`
  background: ${ifProp('transparent', 'transparent', 'rgba(15, 15, 15, 0.7)')};
  height: ${prop('height')};
  transition: ease 0.3s;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const Title = styled(({ visible, ...props }) => <Text {...props} />)`
  opacity: ${ifProp('visible', 1, 0)};
  transition: ease 0.3s;
`

const MenuIcon = styled(Icon)`
  cursor: pointer;
  transition: ease 0.3s;
  transform: ${ifProp({ icon: 'close' }, 'rotate(-180deg)')};
  :hover {
    color: ${palette('primary', 3)};
  }
`

// `display: block` must be applied to make css transform work
const StyledScrollLink = styled(ScrollLink)`
  display: block;
  cursor: pointer;
  transition: ease 0.3s;
  :hover {
    transform: translateX(-0.5rem);
  }
  &.active {
    font-weight: bold;
  }
`

const Header = ({ title, menuItems, transparent }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState('auto')
  return (
    <StyledHeader transparent={transparent} height={headerHeight}>
      <div>
        <StyledViewport flexDirection="column">
          <Flex justifyContent="space-between" alignItems="center">
            <Title variant="h3" palette="white" visible={!transparent} bold>
              {title}
            </Title>
            <MenuIcon
              icon={isMenuOpen ? 'close' : 'menu'}
              width="1.5rem"
              height={isMenuOpen ? '2rem' : '1.75rem'}
              color="white"
              onClick={() => setMenuOpen(!isMenuOpen)}
            />
          </Flex>
          {isMenuOpen && (
            <Flex flexDirection="column" alignItems="flex-end">
              <Fade right cascade>
                {menuItems.map((menuItem) => {
                  const { name, to } = menuItem
                  return (
                    <Text key={to} variant="h3" palette="white">
                      <StyledScrollLink
                        to={to}
                        spy
                        smooth
                        offset={-60}
                        duration={500}
                        activeClass="active"
                        onClick={() => setMenuOpen(false)}
                      >
                        {name}
                      </StyledScrollLink>
                    </Text>
                  )
                })}
              </Fade>
            </Flex>
          )}
        </StyledViewport>
        <ReactResizeDetector
          handleHeight
          onResize={(width, height) => setHeaderHeight(`${height}px`)}
        />
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      to: PropTypes.string,
    }),
  ),
  transparent: PropTypes.bool,
}

Header.defaultProps = {
  title: '',
  menuItems: [],
  transparent: true,
}

export default Header
