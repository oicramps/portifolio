import styled, { css } from 'styled-components';

const Styled = {};

Styled.Main = styled.main`
  ${({ theme }) => css`
    margin: ${theme.spacings.xl} 200px;
    flex: 1 0 auto;

    @media screen and (max-width: ${theme.screens.xl}) {
      margin: ${theme.spacings.xl};
    } ;
  `}
`;

Styled.UnderDevelopment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primary};
  font-weight: 700;
`;

export default Styled;
