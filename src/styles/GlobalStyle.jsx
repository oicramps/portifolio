import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html { 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
    font-size: 80%;
  }

  body {
    color: ${({ theme }) => theme.palette.light};
    background-color: ${({ theme }) => theme.palette.bg};
    font-family: 'Poppins', sans-serif;
    margin: ${({ theme }) => theme.spacings.xl};
  }
`;

export default GlobalStyle;
