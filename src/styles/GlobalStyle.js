import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }

    body{
        background-color: #1a1a1a;
        color: white;
    }
`

export default GlobalStyle