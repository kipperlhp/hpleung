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
    title: 'T.O.P. 十萬個氹掂美美的理由',
    description: 'An AR-based web for users to take photos with virtual cartoon characters within a shopping mall',
    imgKey: 'imageTopValentine',
    url: 'https://www.linkreit.com/tc/media/news-releases/t-o-p-x-mr-h-h-x-gfwestface-present-100-000-ways-to-survive/',
  },
  {
    title: 'Kolour 聖誕意味港遊',
    description: 'A Christmas-themed interactive web allowing users to collect stamps in a shopping mall and redeem prizes',
    imgKey: 'imageKolourChristmas',
    url: 'https://webar.snappopapp.com/app/kolour_tw',
  },
  {
    title: 'eBid Mobile',
    description: 'A one-stop mobile platform allowing users to do real-time bidding and purchase second-hand electronics from various online auctions',
    imgKey: 'imageEBid',
    url: 'http://www.hangsengdev.com/en/we-chat',
  },
  {
    title: 'HKSTP Experience Center',
    description: 'An portable admin panel for monitoring the content & status of the devices at HKSTP Experience Center',
    imgKey: 'imageHkstp',
    url: 'https://betterfutureawards.com/HKG21/project.asp?ID=21850',
  },
  {
    title: 'Chitchat',
    description: 'A real-time chatroom with anonymous functionality allowing users to chat with strangers',
    imgKey: 'imageChitChat',
    url: 'https://chitchat-hp.netlify.app',
  },
  {
    title: 'LEGO Checker',
    description: 'An info checker for Lego sets, including price, parts number, and other details',
    imgKey: 'imageLegoChecker',
    url: 'https://lego-checker.netlify.app',
  },
  {
    title: 'TAB Asia',
    description: 'A platform for planning and booking group dining experiences, with different enhancements and add-on services',
    imgKey: 'imageTab',
    url: 'https://www.tab.asia',
  },
  {
    title: 'My Portfolio',
    description: 'A personal website showing my info & works',
    imgKey: 'imagePortfolio',
    url: 'https://www.hpleung.com',
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
      imageChitChat: file(relativePath: { eq: "chitchat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, maxHeight: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageHkstp: file(relativePath: { eq: "hkstp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, maxHeight: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageEBid: file(relativePath: { eq: "ebid.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, maxHeight: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageKolourChristmas: file(relativePath: { eq: "kolour-christmas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, maxHeight: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageTopValentine: file(relativePath: { eq: "top-valentine.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, maxHeight: 480) {
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
