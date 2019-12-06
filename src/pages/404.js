import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Text from '../components/atoms/Text'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Text variant="h1">NOT FOUND</Text>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
