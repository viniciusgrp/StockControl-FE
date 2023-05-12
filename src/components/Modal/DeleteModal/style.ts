import { styled } from 'styled-components';

export const ModalContent = styled.div`
    width: 50%;
    background-color: white;
    padding: 10px 3%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    border-radius: 8px;

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;

        button {
            border-radius: 5px;
            border: none;
            padding: 5px;
            color: white;
        }

        .cancelButton {
            background-color: blue;  
        }

        .deleteButton {
            background-color: red;
        }
    }
    @media screen and (min-width: 570px) {
        padding: 15px 5%;
    }
`