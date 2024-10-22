import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobaStyle = createGlobalStyle`
${normalize}
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    box-sizing: border-box;
  }

`;
