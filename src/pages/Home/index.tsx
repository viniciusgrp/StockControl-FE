import { useEffect, useState } from "react";
import { api } from "../../services";
import { Header, HomeStyle, StockBox, StockList } from "./style";
import { Modal } from "../../components/Modal";
import { useSelector } from "react-redux";
import { Product } from "../../components/Product/ProductBox";
import { Filters } from "../../components/Filters";
import { IFiltersReducer } from "../../store/modules/filters/reducer";
import { IStore } from "../../store";
import { IModalReducer } from "../../store/modules/modal/reducer";
import {
  ProductList,
  ProductListHeader,
} from "../../components/Product/ProductList";
import { useDispatch } from "react-redux";
import Logo from "../../img/logo.png";
import { IProduct, IProducts } from "../../components/interfaces";
import { Pagination } from "../../components/Pagination";

export const Home = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const dispatch = useDispatch();

  const modal: IModalReducer = useSelector((state: IStore) => state.modal);

  const filters: IFiltersReducer = useSelector(
    (state: IStore) => state.filters
  );

  const getProducts = async () => {
    try {
      const { data } = await api.get<IProducts>("/products", {
        params: {
          orderBy: filters.orderBy,
          limit: filters.limit,
          name: filters.inputSearch,
          page: filters.page,
        },
      });
      console.log(data);
      setProducts(data.products);
      dispatch({ type: "totalOfPages", totalOfPages: data.pages });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [
    modal.modalShow,
    filters.inputSearch,
    filters.limit,
    filters.orderBy,
    filters.page,
  ]);

  return (
    <HomeStyle>
      <Header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <button
          onClick={() => {
            dispatch({ type: "modalShow", modalShow: true });
            dispatch({ type: "modalType", modalType: "add" });
          }}
        >
          Adicionar ao estoque
        </button>
      </Header>
      <Filters />

      {products?.length && filters.listStyle === "box" ? (
        <StockBox>
          {products?.map((product: IProduct) => (
            <Product product={product} />
          ))}
        </StockBox>
      ) : (
        <StockList>
          <ProductListHeader />
          {products?.map((product: IProduct) => (
            <ProductList product={product} />
          ))}
        </StockList>
      )}
      <Pagination />
      {modal.modalShow && <Modal />}
    </HomeStyle>
  );
};
