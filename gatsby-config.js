module.exports = {
  siteMetadata: {
    title: 'H.P.Leung',
    description: 'H.P.Leung is a Software Developer based in Hong Kong.',
    author: 'H.P.Leung',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'H.P.Leung',
        short_name: 'H.P.Leung',
        start_url: '/',
        background_color: '#0F0F0F',
        theme_color: '#0F0F0F',
        display: 'standalone',
        icon: 'src/images/favicon.ico', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
