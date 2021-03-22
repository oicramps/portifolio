import React from 'react';

import PropTypes from 'prop-types';
import Styled from './styles';

const Button = ({ children, color, icon, onClick, download, href }) => (
  <Styled.Button color={color} onClick={onClick} download={download} href={href}>
    {children}
    {icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
  </Styled.Button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'light', 'dark']),
  onClick: PropTypes.func,
  download: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  icon: undefined,
  onClick: () => {},
  download: false,
  href: undefined,
};

export default Button;
