require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.oicramps.dev',
    title: 'Márcio Santos - Frontend Developer',
    description: "Hello! I'm Márcio Santos, the Frontend Developer you're looking for",
    author: '@oicramps',
    social: {
      linkedin: 'https://www.linkedin.com/in/oicramps/',
      github: 'https://github.com/oicramps',
      twitter: 'https://twitter.com/oicramps',
      mail: 'mailto:marcio.tbms@gmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GA_MEASUREMENT_ID],
      },
      pluginConfig: {
        head: true,
      },
    },
  ],
};
