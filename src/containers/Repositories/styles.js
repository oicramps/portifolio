import styled, { css } from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.xl};
`;

Styled.Items = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media screen and (min-width: ${theme.screens.xxl}) {
      justify-content: space-between;
    }
  `}
`;

export default Styled;
