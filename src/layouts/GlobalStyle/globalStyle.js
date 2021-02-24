import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0 148px;
  }
  button {
    padding: 0;
    cursor: pointer;
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle;