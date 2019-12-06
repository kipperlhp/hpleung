import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { Link as ScrollLink, Element } from 'react-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/atoms/Image'
import Icon from '../components/atoms/Icon'
import Text from '../components/atoms/Text'

const Banner = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "propic.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      },
    }
  `)
  return (
    <Layout>
      <SEO title="H.P.Leung" />
      <Banner>
        <Text variant="h1" bold>H.P.Leung</Text>
        <Text variant="h2" bold>Software Developer</Text>
        <ScrollLink
          to="profile"
          smooth
          offset={-100}
          duration={500}
        >
          <Icon icon="scroll-down" />
        </ScrollLink>
      </Banner>
      <Element name="profile" />
      <Flex justifyContent="center">
        <Image
          src={data.placeholderImage.childImageSharp.fixed}
          fixed
          circle
        />
      </Flex>
    </Layout>
  )
}

export default IndexPage
