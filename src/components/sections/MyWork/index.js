import React from 'react'
import styled, { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid'
import Fade from 'react-reveal/Fade'
import ScrollSection from '../../molecules/ScrollSection'
import ImageButtonBox from '../../molecules/ImageButtonBox'
import breakpoint from '../../../utils/breakpoint'

const works = [
  {
    title: 'My Portfolio',
    description: 'A personal website showing my info & works',
    imgKey: 'imagePortfolio',
    url: 'https://www.hpleung.com',
  },
  {
    title: 'TAB Asia',
    description: 'A platform for planning and booking group dining experiences, with different enhancements and add-on services',
    imgKey: 'imageTab',
    url: 'https://www.tab.asia',
  },
  {
    title: 'LEGO Checker',
    description: 'An info checker for Lego sets',
    imgKey: 'imageLegoChecker',
    url: 'https://lego-checker.netlify.com',
  },
]

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
        {works.map((work, i) => {
          const { title, description, imgKey, url } = work
          return (
            <ImageBox key={i}>
              <Fade bottom>
                <ImageButtonBox
                  title={title}
                  description={description}
                  imgSrc={data[imgKey].childImageSharp.fluid}
                  btnLink={url}
                />
              </Fade>
            </ImageBox>
          )
        })}
      </Flex>
    </ScrollSection>
  )
}

export default MyWork
