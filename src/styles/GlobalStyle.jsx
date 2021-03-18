import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html { 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${({ theme }) => theme.palette.light};
    background-color: ${({ theme }) => theme.palette.bg};
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
