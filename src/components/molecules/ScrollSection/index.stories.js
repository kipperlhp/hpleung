import React from 'react'
import { storiesOf } from '@storybook/react'
import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import ScrollSection from '.'
import Text from '../../atoms/Text'
import Image from '../../atoms/Image'

const data = useStaticQuery(graphql`
  query {
    fixedImage: file(relativePath: { eq: "propic.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    },
  }
`)

storiesOf('Molecules|ScrollSection', module)
  .add('default', () => (
    <ScrollSection name="test-section">
      <Text>This is some testing text</Text>
    </ScrollSection>
  ))
  .add('custom title', () => (
    <ScrollSection name="test-section" title="Custom Title~~">
      <Fade bottom cascade>
        <Image src={data.fixedImage.childImageSharp.fixed} fixed />
        <Text>This is some testing text</Text>
      </Fade>
    </ScrollSection>
  ))
