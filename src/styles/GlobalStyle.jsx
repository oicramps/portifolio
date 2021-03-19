import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html, body { 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
    margin: 0;

  }

  body {
    color: ${({ theme }) => theme.palette.light};
    background-color: ${({ theme }) => theme.palette.bg};
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
