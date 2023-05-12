import { styled } from "styled-components";

export const FiltersStyle = styled.div`
margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    width: 100%;

    .selectsFilter {
        display: flex;
        flex-direction: column;
        gap: 7px;
        width: 100%;
        align-items: center;

        select {
            width: 80%;
            padding: 5px;
            border-radius: 4px;
        }
    }

    form {
        display: flex;
        justify-content: center;
        width: 100%;
        input {
             width: 70%;
             padding: 5px;
             border-radius: 5px 0 0 5px;
             border: 1px solid black;
             border-right: none;
        }
        button {
            width: 30px;
            height: 30px;
            border-radius: 0 5px 5px 0;
            border: 1px solid black;
        }
    }
`