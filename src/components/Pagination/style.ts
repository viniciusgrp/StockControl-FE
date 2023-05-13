import { styled } from "styled-components";

export const PaginationStyle = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px auto;
    gap: 10px;

    button {
        background-color: blue;
        padding: 7px 12px;
        border-radius: 5px;
        color: white;
        border: none;
    }
    .actualPage {
        background-color: #ac3e99;
    }
`