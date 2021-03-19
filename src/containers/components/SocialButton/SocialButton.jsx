import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Styled from './styles';

const SocialButton = ({ name }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              linkedin
              twitter
              github
            }
          }
        }
      }
    `
  );

  const { linkedin, twitter, github } = site.siteMetadata.social;

  const social = {
    linkedin: {
      url: linkedin,
      icon: <FaLinkedinIn size={20} />,
    },
    twitter: {
      url: twitter,
      icon: <FaTwitter size={20} />,
    },
    github: {
      url: github,
      icon: <FaGithub size={20} />,
    },
  };

  const handleOpenLink = () => {
    window.open(social[name].url, '_blank');
  };

  return <Styled.Button onClick={handleOpenLink}>{social[name].icon}</Styled.Button>;
};

SocialButton.propTypes = {
  name: PropTypes.oneOf(['twitter', 'linkedin', 'github']).isRequired,
};

export default SocialButton;
