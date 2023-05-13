import { styled } from 'styled-components';

export const ModalContent = styled.div`
max-width: 500px;
    width: 90%;
    background-color: white;
    padding: 10px 3%;
    animation-name: growmodal;
    animation-duration: 1s;
    border-radius: 8px;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        button {
            background-color: transparent;
            border: none;
            font-size: 18px;
        }
    }

    form {
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;

        .inputForm {
            display: flex;
            flex-direction: column;

            input {
                padding: 5px;
                border-radius: 5px;
                border: 1px solid black;
            }
        }

        button {
            background-color: blue;
            border: none;
            padding: 5px;
            color: white;
            border-radius: 5px;
        }
    }

    @media screen and (min-width: 570px) {
        padding: 15px 5%;
    }

    @keyframes growmodal {
        from {
            scale: 0.8;
        }
        to {
            scale: 1;
        }
    }
`