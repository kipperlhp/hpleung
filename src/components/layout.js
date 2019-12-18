/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ifNotProp } from 'styled-tools'
import { useStaticQuery, graphql } from 'gatsby'
import debounce from 'lodash/debounce'
import styled, { ThemeProvider, css } from 'styled-components'
import { Flex } from '@rebass/grid'
import { animateScroll as scroll } from 'react-scroll'
import Icon from './atoms/Icon'

import Header from './header'
import Footer from './footer'
import appTheme from './theme'
import './layout.css'

const MainContent = styled.main`
  flex: 1 1 auto;
`

const UpIconBtn = styled(Icon)`
  cursor: pointer;
  position: fixed;
  bottom: 0.8rem;
  right: 0.8rem;
  transition: ease 0.3s;
  :hover {
    transform: translateY(-4px);
  }
  ${ifNotProp('isVisible', css`
    width: 0;
    transform: translateY(50px);
  `)}
`
const menuItems = [
  { name: 'About', to: 'about' },
  { name: 'Timeline', to: 'timeline' },
  { name: 'My Works', to: 'my-works' },
  { name: 'Contact', to: 'contact' },
]

const Layout = ({ children }) => {
  const [isUpBtnVisible, setUpBtnVisible] = useState(false)
  const scrollListener = () => {
    const scrollOffset = window.scrollY
    if (scrollOffset > 300) {
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
          short_title
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
        <Header
          title={data.site.siteMetadata.short_title}
          menuItems={menuItems}
          transparent={!isUpBtnVisible}
        />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
        <UpIconBtn
          icon="circle-up"
          width="2.5rem"
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
