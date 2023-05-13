import { styled } from "styled-components";

export const ProductListStyleHeader = styled.li`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    background-color: rgba(0,0,0,0.2);
    p {
        width: 100%;
        text-align: center;
    }
`

export const ProductListStyle = styled.li`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    p {
        width: 100%;
        text-align: center;
    }

    button {
        background-color: transparent;
        border: 1px solid black;
        font-size: 18px;

        :nth-child(1){
            color: blue;
        }
        :nth-child(2){
            color: red;
        }
    }
`