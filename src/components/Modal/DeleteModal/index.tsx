import { useDispatch } from "react-redux";
import { ModalContent } from "./style";
import { useSelector } from "react-redux";
import { api } from "../../../services";
import { IStore } from "../../../store";

export const DeleteModal = () => {
  const { modalId } = useSelector((state: IStore) => state.modal);
  const dispatch = useDispatch();

  const deleteProduct = async () => {
    try {
      await api.delete(`/products/${modalId}`);
      dispatch({ type: "modalShow", modalShow: false });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(modalId);
  return (
    <ModalContent>
      <span>Deseja realmente deletar?</span>
      <div className="buttons">
        <button
          onClick={() => dispatch({ type: "modalShow", modalShow: false })}
          className="cancelButton"
        >
          Cancelar
        </button>
        <button onClick={() => deleteProduct()} className="deleteButton">
          Deletar
        </button>
      </div>
    </ModalContent>
  );
};
