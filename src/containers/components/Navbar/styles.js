import styled from 'styled-components';

const Styled = {};

Styled.Navbar = styled.div`
  padding: ${({ theme }) => theme.spacings.md};
  display: flex;
  justify-content: space-between;
`;

Styled.Menu = styled.div`
  display: flex;
`;

export default Styled;
