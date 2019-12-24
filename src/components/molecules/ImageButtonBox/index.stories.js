import React from 'react'
import { storiesOf } from '@storybook/react'
import { useStaticQuery, graphql } from 'gatsby'
import ImageButtonBox from '.'

const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "propic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`)

storiesOf('Molecules|ImageButtonBox', module)
  .add('default', () => (
    <ImageButtonBox
      title="My Portfolio"
      description="A personal website showing my info & works"
      imgSrc={data.image.childImageSharp.fluid}
      btnLink="https://www.hpleung.com"
      width="300px"
    />
  ))
