import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  transition: all 0.3s;
}

html,
body {
  height: 100%;
}

body {
  background: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-rendering: optimizelegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
`;
export default GlobalStyle;
