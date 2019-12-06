/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { palette, ifNotProp } from 'styled-tools'
import { useStaticQuery, graphql } from 'gatsby'
import debounce from 'lodash/debounce'
import styled, { ThemeProvider, css } from 'styled-components'
import { Flex } from '@rebass/grid'
import { animateScroll as scroll } from 'react-scroll'
import Viewport from './atoms/Viewport'
import Icon from './atoms/Icon'

import Header from './header'
import appTheme from './theme'
import './layout.css'

const StyledFooter = styled.footer`
  background: ${palette('primary', 1)};
  min-height: 100px;
`

const MainContent = styled.main`
  flex: 1 1 auto;
`

const UpIconBtn = styled(Icon)`
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: ease 0.3s;
  ${ifNotProp('isVisible', css`
    width: 0;
    transform: translateY(50px);
  `)}
`

const Layout = ({ children }) => {
  const [isUpBtnVisible, setUpBtnVisible] = useState(false)
  const scrollListener = () => {
    const scrollOffset = window.scrollY
    if (scrollOffset > 150) {
      setUpBtnVisible(true)
    } else {
      setUpBtnVisible(false)
    }
  }
  const debouncedScrollListener = debounce(scrollListener, 100)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    window.addEventListener('scroll', debouncedScrollListener)
    return (() => {
      window.removeEventListener('scroll', debouncedScrollListener)
    })
  })

  return (
    <ThemeProvider theme={appTheme}>
      <Flex flexDirection="column" style={{ height: '100%' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainContent>
          <Viewport>
            {children}
          </Viewport>
        </MainContent>
        <StyledFooter>
          {`©${new Date().getFullYear()}`}
        </StyledFooter>
        <UpIconBtn
          icon="circle-up"
          width="40px"
          isVisible={isUpBtnVisible}
          onClick={() => scroll.scrollToTop({ duration: 500 })}
        />
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
