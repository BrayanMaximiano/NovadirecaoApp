import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        text-decoration: none;
        color: black;
    }

    body{
        background-color: #fff;
        color: white;
    }
`

export default GlobalStyle