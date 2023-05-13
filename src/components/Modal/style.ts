import styled, { keyframes } from "styled-components";

const openModal = keyframes`
        from {
            background-color: transparent;
        }

        to {
            background-color: rgba(0,0,0,0.7);
        }
`;

export const ModalStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  animation: forwards 1s;
  animation-name: ${openModal};
  display: flex;
  align-items: center;
  justify-content: center;
`;
