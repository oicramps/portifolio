import styled from 'styled-components';

const Styled = {};

Styled.Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.xl};
  background-color: ${({ theme }) => theme.palette.primary};
`;

Styled.SocialIcons = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.md};
`;

export default Styled;
