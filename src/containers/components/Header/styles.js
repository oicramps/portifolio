import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacings.xl};

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
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

export const Avatar = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: row-reverse;
`;

export const Description = styled.p`
  text-align: justify;
  max-width: 400px;
`;
