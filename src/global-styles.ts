import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`



    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html,
    body,
    #root
    {
        height: 100%;
        width: 100%;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333333;
        font-size: 16px;
    }
    a {
        text-decoration: none;
        color: #3333;
    }
    ul {
        list-style: none;
    }
`;
