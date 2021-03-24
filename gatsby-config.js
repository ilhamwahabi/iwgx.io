require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ilham Wahabi`,
    description: `a personal website by iwgx`,
    author: `@ilhamwahabigx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iwgx`,
        short_name: `iwgx`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Hind'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
        delayTimeout: 0,
      },
    },
    'gatsby-plugin-no-javascript', // make sure it is included last in the plugins array.
  ],
};
