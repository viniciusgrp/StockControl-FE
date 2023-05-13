import { styled } from "styled-components";

export const ProductListStyleHeader = styled.li`
    display: grid;
    width: fit-content;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color: rgba(0,0,0,0.2);
    p {
        min-width: 100px;
        width: 100%;
        text-align: center;
    }
`

export const ProductListStyle = styled.li`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    p {
        min-width: 100px;
        width: 100%;
        text-align: center;
    }

    button {
        background-color: transparent;
        border: 1px solid black;
        font-size: 18px;
        min-width: 100px;

        :nth-child(1){
            color: blue;
        }
        :nth-child(2){
            color: red;
        }
    }
`