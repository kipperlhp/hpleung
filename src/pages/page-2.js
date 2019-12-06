import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Text from '../components/atoms/Text'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Text variant="h1">Hi from the second page</Text>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
