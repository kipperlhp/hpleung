import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Text from '../components/atoms/Text'

const TestPage = () => (
  <Layout>
    <SEO title="Test Page" />
    <Text variant="h1">Hi from the Test page</Text>
    <p>Welcome to Test Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TestPage
