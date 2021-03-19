import styled from 'styled-components';

const Styled = {};

Styled.Button = styled.button`
  cursor: pointer;
  border: 2px solid ${({ theme, color }) => theme.palette[color]};
  color: ${({ theme }) => theme.palette.light};
  background-color: ${({ theme }) => theme.palette.dark};
  border-radius: 24px;
  transition: all 0.5s ease;
  padding: ${({ theme }) => `${theme.spacings.sm} ${theme.spacings.xl}`};
  outline: none;
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 10px -8px rgb(0 0 0 / 40%);

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.light};
  }
`;

Styled.Icon = styled.div`
  margin-left: ${({ theme }) => theme.spacings.md};
`;

export default Styled;
