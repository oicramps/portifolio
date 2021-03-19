import styled from 'styled-components';

const Styled = {};

Styled.Main = styled.main`
  margin: ${({ theme }) => theme.spacings.xl};
  flex: 1 0 auto;
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
