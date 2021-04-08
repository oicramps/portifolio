import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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
              mail
            }
          }
        }
      }
    `
  );

  const { linkedin, twitter, github, mail } = site.siteMetadata.social;

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
    mail: {
      url: mail,
      icon: <MdEmail size={20} />,
    },
  };

  const handleOpenLink = () => {
    window.open(social[name].url, '_blank');
    if (window.gtag) window.gtag('event', 'social_media', { name });
  };

  return <Styled.Button onClick={handleOpenLink}>{social[name].icon}</Styled.Button>;
};

SocialButton.propTypes = {
  name: PropTypes.oneOf(['twitter', 'linkedin', 'github', 'mail']).isRequired,
};

export default SocialButton;
