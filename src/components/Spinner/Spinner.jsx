import React, { useContext } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { ThemeContext } from 'styled-components';

import PropTypes from 'prop-types';

const Spinner = ({ isLoading }) => {
  const { palette } = useContext(ThemeContext);

  return <BounceLoader loading={isLoading} color={palette.primaryDark} size={75} />;
};

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

Spinner.defaultProps = {
  isLoading: false,
};

export default Spinner;
