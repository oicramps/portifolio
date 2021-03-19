import styled from 'styled-components';

const Styled = {};

Styled.Button = styled.button`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.light};
  color: ${({ theme }) => theme.palette.light};
  background-color: transparent;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  transition: all 0.5s ease;
  margin: ${({ theme }) => theme.spacings.sm};
  padding: ${({ theme }) => theme.spacings.md};
  outline: none;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.palette.light};
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export default Styled;
