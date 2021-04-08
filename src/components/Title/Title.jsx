import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

const Title = ({ children }) => <Styled.Title>{children} </Styled.Title>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
