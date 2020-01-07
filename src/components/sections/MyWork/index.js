import React from 'react'
import styled, { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid'
import Fade from 'react-reveal/Fade'
import ScrollSection from '../../molecules/ScrollSection'
import ImageButtonBox from '../../molecules/ImageButtonBox'
import breakpoint from '../../../utils/breakpoint'

const ImageBox = styled(Box)`
  width: 33.3%;
  ${breakpoint('tablet', css`
    width: 50%;
  `)}
  ${breakpoint('mobile', css`
    width: 85%;
  `)}
`

const MyWork = () => {
  const data = useStaticQuery(graphql`
    query {
      imagePortfolio: file(relativePath: { eq: "my-portfolio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageTab: file(relativePath: { eq: "tab.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageLegoChecker: file(relativePath: { eq: "lego-checker.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return (
    <ScrollSection name="my-works" mb="10rem">
      <Flex width={1} flexWrap="wrap" justifyContent="center">
        <ImageBox>
          <Fade bottom>
            <ImageButtonBox
              title="My Portfolio"
              description="A personal website showing my info & works"
              imgSrc={data.imagePortfolio.childImageSharp.fluid}
              btnLink="https://www.hpleung.com"
            />
          </Fade>
        </ImageBox>
        <ImageBox>
          <Fade bottom>
            <ImageButtonBox
              title="TAB Asia"
              description="A platform for planning and booking group dining experiences, with different enhancements and add-on services."
              imgSrc={data.imageTab.childImageSharp.fluid}
              btnLink="https://www.tab.asia"
            />
          </Fade>
        </ImageBox>
        <ImageBox>
          <Fade bottom>
            <ImageButtonBox
              title="LEGO Checker"
              description="An info checker for Lego sets"
              imgSrc={data.imageLegoChecker.childImageSharp.fluid}
              btnLink="https://lego-checker.netlify.com"
            />
          </Fade>
        </ImageBox>
      </Flex>
    </ScrollSection>
  )
}

export default MyWork
