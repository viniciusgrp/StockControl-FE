import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`