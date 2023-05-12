import { useDispatch } from "react-redux";
import { ModalContent } from "./style";

export const EditModal = () => {
    
    const dispatch = useDispatch();

  return (
      <ModalContent className="modalContent">
        <header>
          <span>Editar</span>
          <button onClick={() => dispatch({type: "modalShow", modalShow: false})}>X</button>
        </header>
        <form>
          <div className="inputForm">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="inputForm">
            <label htmlFor="price">Preço</label>
            <input type="number" name="price" id="price" />
          </div>
          <div className="inputForm">
            <label htmlFor="quantity">Quantidade</label>
            <input type="number" name="quantity" id="quantity" />
          </div>
          <button type="submit">Editar</button>
        </form>
      </ModalContent>
  );
};
