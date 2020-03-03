/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Leamos',
    author: 'Guillermo Hernan De Souza',
    description: 'Tienda de libros online',
    siteUrl: 'https://leamos.com/',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ]
}
