import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacings.xxl};

  @media screen and (max-width: ${({ theme }) => console.log(theme.screens.sm) || theme.screens.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h5`
  color: ${({ theme }) => theme.palette.gray};
  font-weight: 300;
  margin: 0;
  line-height: 0.5;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: ${({ theme }) => theme.spacings.xxl};
  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacings.xxl};
  }
`;

export const Description = styled.p`
  text-align: justify;
  max-width: 600px;
`;
