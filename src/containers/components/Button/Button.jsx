import React from 'react';

import PropTypes from 'prop-types';
import Styled from './styles';

const Button = ({ children, color, icon }) => (
  <Styled.Button color={color}>
    {children}
    {icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
  </Styled.Button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'light', 'dark']),
};

Button.defaultProps = {
  color: 'primary',
  icon: null,
};

export default Button;
