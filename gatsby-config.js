module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "headless-wordpress",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://headlesswordpress.local/graphql",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
