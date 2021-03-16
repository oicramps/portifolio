import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const Layout = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
