import styled, { css } from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.xl};
`;

Styled.Items = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `}
`;

export default Styled;
