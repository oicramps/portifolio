import React from 'react';

import PropTypes from 'prop-types';
import Styled from './styles';

const Button = ({ children, color, icon, onClick, margin, ...rest }) => (
  <Styled.Button color={color} onClick={onClick} margin={margin} {...rest}>
    <Styled.Content>{children}</Styled.Content>
    {icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
  </Styled.Button>
);

const MarginType = PropTypes.oneOf[('sm', 'md', 'lg')];

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'light', 'dark']),
  onClick: PropTypes.func,
  margin: PropTypes.shape({ mb: MarginType, mt: MarginType }),
};

Button.defaultProps = {
  color: 'primary',
  icon: undefined,
  onClick: () => {},
  margin: { mb: null, mt: null },
};

export default Button;
