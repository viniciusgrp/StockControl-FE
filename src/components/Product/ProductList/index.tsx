import { ProductListStyle, ProductListStyleHeader } from "./style";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

export const ProductListHeader = () => {
  return (
    <ProductListStyleHeader className="listHeader">
      <p>Nome</p>
      <p>Preço</p>
      <p>Quantidade em estoque</p>
      <p>Editar</p>
      <p>Excluir</p>
    </ProductListStyleHeader>
  );
};

export const ProductList = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <ProductListStyle>
      <p>{product.name}</p>
      <p>
        {product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p
        className={
          product.quantityStock >= 31
            ? "good"
            : product.quantityStock >= 11
            ? "warning"
            : "critical"
        }
      >
        {product.quantityStock}
      </p>
      <button
        onClick={() => {
          dispatch({ type: "modalShow", modalShow: true });
          dispatch({ type: "modalType", modalType: "edit" });
          dispatch({ type: "modalId", modalId: product.id });
        }}
      >
        <AiOutlineEdit />
      </button>
      <button onClick={() => {
          dispatch({ type: "modalShow", modalShow: true });
          dispatch({ type: "modalType", modalType: "delete" });
          dispatch({ type: "modalId", modalId: product.id });
        }}>
        <RiDeleteBin2Line />
      </button>
    </ProductListStyle>
  );
};
