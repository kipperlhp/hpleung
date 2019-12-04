import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/atoms/Image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "propic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi</h1>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image src={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
