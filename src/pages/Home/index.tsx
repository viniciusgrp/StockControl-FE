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

export const Home = () => {
  const [products, setProducts] = useState<any>();

  const dispatch = useDispatch()

  const modal: IModalReducer = useSelector((state: IStore) => state.modal);

  const filters: IFiltersReducer = useSelector(
    (state: IStore) => state.filters
  );

  const getProducts = async () => {
    try {
      const { data } = await api.get("/products", {
        params: {
          orderBy: filters.orderBy,
          limit: filters.limit,
          name: filters.inputSearch
        },
      });
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [modal.modalShow, filters]);

  return (
    <HomeStyle>
      <Header>
        <h1>StockControl</h1>
        <button onClick={() => {
           dispatch({ type: "modalShow", modalShow: true });
           dispatch({ type: "modalType", modalType: "add" });
        }}>Adicionar ao estoque</button>
      </Header>
      <Filters />

      {products?.length && filters.listStyle === "box" ? (
        <StockBox>
          {products?.map((product: any) => (
            <Product product={product} />
          ))}
        </StockBox>
      ) : (
        <StockList>
          <ProductListHeader />
          {products?.map((product: any) => (
            <ProductList product={product} />
          ))}
        </StockList>
      )}
      {modal.modalShow && <Modal />}
    </HomeStyle>
  );
};
