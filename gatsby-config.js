module.exports = {
  siteMetadata: {
    title: 'H.P.Leung | Software Developer',
    short_title: 'H.P.Leung',
    description: 'H.P.Leung (Leung Hiu Pak) is a Software Developer based in Hong Kong, focusing in web application development.',
    author: 'H.P.Leung',
    image: 'https://hpleung.com/icons/icon-256x256.png',
    siteUrl: 'https://www.hpleung.com',
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
    'gatsby-plugin-styled-components',
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
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        exclude: [
          '/404',
          '/test',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.hpleung.com',
        sitemap: 'https://www.hpleung.com/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/',
          disallow: ['/assets/*'],
        }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
