import styled, { css } from 'styled-components';

const Styled = {};

Styled.Title = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: ${theme.spacings.xxl};
    ::first-letter {
      font-size: 2rem;
      color: ${theme.palette.primary};
    }
  `}
`;

export default Styled;
