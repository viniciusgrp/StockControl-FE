import { styled } from "styled-components";
export const HomeStyle = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100vw;
  background-color: #dcd2f7;
  padding: 8px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .logo {
    max-height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      max-width: 170px;
    }
    h1 {
      font-size: 16px;
    }
  }

  button {
    background-color: #961a99;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    color: white;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const StockBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  gap: 10px;

  li {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 80%;
    border-radius: 8px;

    .liDivs {
      width: 90%;
      display: flex;
      justify-content: space-between;
    }

    .liButtons {
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7px;

      button {
        width: 90%;
        border: none;
        border-radius: 5px;
        padding: 5px;
        color: white;
      }

      .editButton {
        background-color: blue;
      }

      .deleteButton {
        background-color: red;
      }
    }

    .divStatus {
      height: 100%;
      width: fit-content;
      padding: 5px 8px;
      text-transform: uppercase;
      border-radius: 8px;
      color: white;
    }

    .good {
      background-color: green;
    }

    .warning {
      background-color: orange;
      color: black;
    }

    .critical {
      background-color: red;
      color: white;
    }
  }

  @media screen and (min-width: 570px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    li {
      width: 45%;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 3%;
    li {
      width: 30%;
    }
  }

  @media screen and (min-width: 1500px) {
    max-width: 1500px;
    margin: 20px auto;

    li {
      width: 24%;
    }
  }
`;

export const StockList = styled.ul`
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  overflow: auto;

  p {
    border: 1px solid black;
    padding: 3px;
  }

  .good {
    background-color: green;
  }

  .warning {
    background-color: orange;
    color: black;
  }

  .critical {
    background-color: red;
    color: white;
  }
`;
