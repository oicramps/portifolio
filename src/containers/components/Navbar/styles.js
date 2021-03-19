import styled from 'styled-components';

const Styled = {};

Styled.Navbar = styled.div`
  padding: ${({ theme }) => theme.spacings.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacings.xl};
`;

Styled.Menu = styled.div`
  display: flex;
`;

export default Styled;
