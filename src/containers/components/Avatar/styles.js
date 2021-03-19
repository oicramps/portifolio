import styled from 'styled-components';

const Styled = {};

Styled.Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.palette.primary};
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 80%);
`;

export default Styled;
