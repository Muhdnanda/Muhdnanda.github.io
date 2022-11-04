import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Muhammad Nanda`,
    email: `m.nanda@usk.ac.id`,
    wa: `628116888984`,
    linkin: `https://www.linkedin.com/in/muhammad-nanda-42293678`,
    // ig: ``,
    // siteUrl: `https://www.yourdomain.tld`,
    author: `panda-67`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`, 
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
