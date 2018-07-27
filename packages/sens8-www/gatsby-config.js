module.exports = {
  siteMetadata: {
    title: `sens8 docs`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "mdx-pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/docs`,
        name: "mdx-pages"
      }
    },
    {
      resolve: require.resolve(`gatsby-mdx`),
      options: {
        defaultLayout: require.resolve("./src/components/site-layout.js")
      }
    },
    `gatsby-plugin-offline`
  ]
};
