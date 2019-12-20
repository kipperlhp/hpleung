import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Flex } from '@rebass/grid'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Viewport from '../components/atoms/Viewport'
import Icon from '../components/atoms/Icon'
import Text from '../components/atoms/Text'
import AboutSection from '../components/sections/About'
import ContactSection from '../components/sections/Contact'
import TimelineSection from '../components/sections/Timeline'
import MyWorkSection from '../components/sections/MyWork'

const Banner = styled(Flex)`
  background:${palette('primary', 0)};
  height: 100vh;
  background: linear-gradient(
    180deg,
    ${palette('primary', 0)} 0%,
    ${palette('primary', 1)} 55%,
    ${palette('primary', 2)} 75%,
    ${palette('primary', 3)} 85%,
    ${palette('white', 0)} 100%
  );
`

const IconBtn = styled(Icon)`
  cursor: pointer;
  margin-bottom: 4px;
`

const BounceIconBtn = styled(IconBtn)`
  animation-name: bounce;
  -webkit-animation-name: bounce; /* Safari 4.0 - 8.0 */
  animation-duration: 1.5s;
  -webkit-animation-duration: 1.5s; /* Safari 4.0 - 8.0 */
  animation-iteration-count: infinite;
  @keyframes bounce {
    0% { transform: translateY(2px) }
    50% { transform: translateY(-4px) }
    100% { transform: translateY(2px) }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes bounce {
    0% { transform: translateY(2px) }
    50% { transform: translateY(-4px) }
    100% { transform: translateY(2px) }
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="H.P.Leung | Software Developer" />
      <Banner>
        <Viewport flexDirection="column" justifyContent="center" alignItems="center">
          <Fade bottom cascade>
            <Text variant="h1" palette="white" align="center" bold>H.P.Leung</Text>
            <Text variant="h2" palette="white" align="center" bold>Software Developer</Text>
            <Flex mt="3rem">
              <ScrollLink
                to="about"
                smooth
                offset={-60}
                duration={500}
              >
                <Flex flexDirection="column" alignItems="center">
                  <IconBtn icon="mouse" color="white" width="32px" />
                  <BounceIconBtn icon="arrow-down-double" color="white" width="10px" height="20px" />
                </Flex>
              </ScrollLink>
            </Flex>
          </Fade>
        </Viewport>
      </Banner>
      <Viewport flexDirection="column">
        <AboutSection />
        <TimelineSection />
        <MyWorkSection />
        <ContactSection />
      </Viewport>
    </Layout>
  )
}

export default IndexPage
