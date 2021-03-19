import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

const Main = ({ children }) => (
  <Styled.Main>
    {children}
    <Styled.UnderDevelopment>Under development</Styled.UnderDevelopment>
  </Styled.Main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
