import { useEffect, useState } from "react";
import { api } from "../../services";
import { Header, HomeStyle, StockList } from "./style";
import { Modal } from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../components/Product";
import { Filters } from "../../components/Filters";
import { IFilters } from "../../store/modules/filters/reducer";

export const Home = () => {
  const [products, setProducts] = useState<any>();

  const modal = useSelector((state: any) => state.modal);

  const filters: IFilters = useSelector((state: any) => state.filters)

  useEffect(() => {
    console.log(filters)
  },[filters])


  const getProducts = async () => {
    try {
      const { data } = await api.get("/products", {
        params: {
          orderBy: filters.orderBy,
          limit: filters.limit
        }
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
        <button>Adicionar ao estoque</button>
      </Header>
      <Filters/>
      <StockList>
        {products?.length &&
          products.map((product: any) => <Product product={product} />)}
      </StockList>
      {modal.modalShow && <Modal />}
    </HomeStyle>
  );
};
