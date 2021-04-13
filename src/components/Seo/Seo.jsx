import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  );

  const { title, description, author } = site.siteMetadata;

  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: 'en',
      }}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `person`,
          content: author,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://oicramps-portifolio.s3-sa-east-1.amazonaws.com/icon.png`,
        },
      ]}
    />
  );
};

export default Seo;
