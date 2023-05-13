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

        .buttonDiv {
            display: flex;
            gap: 10px;
            
            .active {
                background-color: rgba(0,0,244,0.1);
            }
            button {
                border: 1px solid black;
                display: flex;
                align-items: center;
                height: 100%;
                padding: 5px;
                background-color: transparent;
                color: blue;
                font-size: 18px;
                border-radius: 8px;

            }
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

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 0 7%;
        justify-content: space-between;

        .selectsFilter {
            flex-direction: row;
            max-width: 500px;
        }

        form {
            max-width: 400px;
        }
    }
`