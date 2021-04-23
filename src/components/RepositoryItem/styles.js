import styled, { css } from 'styled-components';

const Styled = {};

Styled.Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 2px solid ${theme.palette.primary};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: ${theme.spacings.lg};
    margin-bottom: ${theme.spacings.lg};
    flex: 0 1 100%;

    @media screen and (min-width: ${theme.screens.lg}) {
      flex: 0 1 calc(47% - 1em);
    }

    @media screen and (min-width: ${theme.screens.xxl}) {
      flex: 0 1 calc(30% - 1em);
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
