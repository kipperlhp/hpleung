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

const DescriptionText = styled(Text)`
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
            <DescriptionText>
              <b>H.P.Leung (Leung Hiu Pak)&nbsp;</b>
              is a Software Developer based in Hong Kong,
              focusing in web application development. He graduated from The Chinese
              University of Hong Kong (CUHK), BSc Compouter Science.
            </DescriptionText>
            <Flex mt={24} justifyContent={['center', 'center', 'flex-start']}>
              <Button>
                <Text>View Resume</Text>
              </Button>
            </Flex>
          </Box>
        </Fade>
      </Flex>
    </ScrollSection>
  )
}

export default AboutSection
