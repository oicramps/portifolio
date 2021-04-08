import styled, { css } from 'styled-components';

const Styled = {};

Styled.Button = styled.a.attrs({ role: 'button' })`
  ${({ theme, color, margin = {} }) => css`
    cursor: pointer;
    border: 2px solid ${theme.palette[color]};
    color: ${theme.palette.light};
    background-color: ${theme.palette.dark};
    border-radius: 24px;
    transition: all 0.5s ease;
    padding: ${`${theme.spacings.sm} ${theme.spacings.xl}`};
    outline: none;
    position: relative;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 10px -8px rgb(0 0 0 / 40%);
    text-decoration: none;
    ${margin.mb ? `margin-bottom: ${theme.spacings[margin.mb]};` : ''}
    ${margin.mt ? `margin-top: ${theme.spacings[margin.mt]};` : ''}

    &:hover {
      background-color: ${theme.palette.primary};
      color: ${theme.palette.light};
    }
  `}
`;

Styled.Icon = styled.div`
  margin-left: ${({ theme }) => theme.spacings.md};
`;

Styled.Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

export default Styled;
