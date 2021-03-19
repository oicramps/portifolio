import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyle';
import Styled from './styles';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Styled.Container>{children}</Styled.Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
