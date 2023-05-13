import { useDispatch } from "react-redux";
import { ProductStyle } from "./style";

export const Product = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <ProductStyle>
      <div
        className={
          product.quantityStock >= 31
            ? "good divStatus"
            : product.quantityStock >= 11
            ? "warning divStatus"
            : "critical divStatus"
        }
      >
        <span>
          {product.quantityStock >= 31
            ? "Ok"
            : product.quantityStock >= 11
            ? "Alerta"
            : "Crítico"}
        </span>
      </div>
      <div className="liDivs">
        <p>Produto:</p>
        <p>{product.name}</p>
      </div>
      <div className="liDivs">
        <p>Preço:</p>
        <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
      </div>
      <div className="liDivs">
        <p>Em estoque:</p>
        <p>{product.quantityStock.toLocaleString("pt-br")}</p>
      </div>
      <div className="liButtons">
        <button
          onClick={() => {
            dispatch({ type: "modalShow", modalShow: true });
            dispatch({ type: "modalType", modalType: "edit" });
            dispatch({ type: "modalId", modalId: product.id });
          }}
          className="editButton"
        >
          Editar
        </button>
        <button
          onClick={() => {
            dispatch({ type: "modalShow", modalShow: true });
            dispatch({ type: "modalType", modalType: "delete" });
            dispatch({ type: "modalId", modalId: product.id });
          }}
          className="deleteButton"
        >
          Excluir
        </button>
      </div>
    </ProductStyle>
  );
};
