import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Fade from 'react-reveal/Fade'
import Image from '../../atoms/Image'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import ScrollSection from '../../molecules/ScrollSection'
import breakpoint from '../../../utils/breakpoint'

const MobileCenterAlignText = styled(Text)`
  ${breakpoint('tablet', css`
    text-align: center;
  `)}
`

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "propic.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      ntuLogo: file(relativePath: { eq: "ntu.jpg" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      cuhkLogo: file(relativePath: { eq: "cuhk.jpg" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      },
    }
  `)
  return (
    <ScrollSection name="about" mb="10rem">
      <Flex justifyContent="center" alignItems="center" flexDirection={['column', 'column', 'row']}>
        <Fade bottom cascade>
          <Box width="200px">
            <Image
              src={data.profilePicture.childImageSharp.fixed}
              alt="H.P.Leung"
              fixed
              circle
            />
          </Box>
          <Box ml={[0, 0, 24]} mt={[24, 24, 0]}>
            <MobileCenterAlignText>
              <b>H.P.Leung (Leung Hiu Pak)&nbsp;</b>
              is a Software Developer based in Hong Kong,
              focusing in web application development. He graduated from The Chinese
              University of Hong Kong (CUHK), BSc Computer Science.
            </MobileCenterAlignText>
            <Flex mt={16} flexDirection="column">
              <Flex flexDirection={['column', 'column', 'row']} alignItems="center">
                <Image src={data.cuhkLogo.childImageSharp.fixed} fixed />
                <Flex flex="1" justifyContent={['center', 'center', 'flex-start']}>
                  <MobileCenterAlignText variant="body2" bold>The Chinese University of Hong Kong</MobileCenterAlignText>
                </Flex>
                <Flex flex="1" justifyContent={['center', 'center', 'flex-start']}>
                  <MobileCenterAlignText variant="body2">BSc Computer Science</MobileCenterAlignText>
                </Flex>
              </Flex>
              <Flex flexDirection={['column', 'column', 'row']} alignItems="center">
                <Image src={data.ntuLogo.childImageSharp.fixed} fixed />
                <Flex flex="1" justifyContent={['center', 'center', 'flex-start']}>
                  <MobileCenterAlignText variant="body2" bold>Nanyang Technological University</MobileCenterAlignText>
                </Flex>
                <Flex flex="1" justifyContent={['center', 'center', 'flex-start']}>
                  <MobileCenterAlignText variant="body2">International Exchange Program - Computer Science</MobileCenterAlignText>
                </Flex>
              </Flex>
            </Flex>
            <Flex mt={24} justifyContent={['center', 'center', 'flex-start']}>
              <Button>
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Text>View Resume</Text>
                </a>
              </Button>
            </Flex>
          </Box>
        </Fade>
      </Flex>
    </ScrollSection>
  )
}

export default AboutSection
