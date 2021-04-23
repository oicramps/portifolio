import styled from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.xl};
`;

Styled.Content = styled.div`
  display: flex;
  justify-content: center;
`;

Styled.Items = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Styled;
