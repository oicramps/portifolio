import styled, { css } from 'styled-components';

const Styled = {};

Styled.Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${theme.palette.primary};
    padding: ${theme.spacings.lg};
    margin-bottom: ${theme.spacings.xl};
    width: 100%;

    @media screen and (min-width: ${theme.screens.lg}) {
      width: unset;
      width: 300px;
    }
  `}
`;

Styled.Name = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.lg};
  `}
`;

Styled.Desc = styled.span`
  text-align: center;
`;

Styled.Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: ${theme.spacings.lg};
  `}
`;

Styled.UpdatedAt = styled.em`
  ${({ theme }) => css`
    text-align: right;
    font-size: 0.7rem;
    font-weight: 500;
    margin-top: ${theme.spacings.xl};

    ::before {
      content: 'Updated at: ';
      font-weight: bold;
    }
  `}
`;

export default Styled;
