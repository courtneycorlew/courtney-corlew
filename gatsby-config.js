module.exports = {
  siteMetadata: {
    title: `Courtney Corlew`,
    name: `Courtney Corlew`,
    siteUrl: `https://courtneycorlew.com`,
    description: `Courtney Corlew is a software engineer writing about foster care and finding your place in tech.`,
    hero: {
      heading: `Hi, I'm Courtney. I write about foster care and finding your place in tech.`,
      maxWidth: 652,
    },
    social: [
      {
        url: `https://twitter.com/courtneyecorlew`,
      },
      {
        url: `https://github.com/courtneycorlew`,
      },
      {
        url: `https://instagram.com/courtneycorlew`,
      },
      {
        url: `https://www.linkedin.com/in/courtneycorlew/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Courtney Corlew`,
        short_name: `Courtney Corlew`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
