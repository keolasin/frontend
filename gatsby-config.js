module.exports = {
  siteMetadata: {
    title: `Frontend Components Challenges`,
    description: `A variety of frontend projects and components built using gatsby for practice. Projects include testing suites and aim to be accessible and modular.`,
    author: `@keolasin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frontend-Challenges`,
        short_name: `Frontend`,
        start_url: `/`,
        background_color: `#FFB073`,
        theme_color: `#009D91`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
