import { useDispatch } from "react-redux";
import { ModalContent } from "./style";
import { api } from "../../../services";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const EditModal = () => {
  const modal = useSelector((state: any) => state.modal);
  const [infos, setInfos] = useState<any>();

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const dispatch = useDispatch();

  const setInitialValues = () => {
    if (infos?.name) {
      setValue("name", infos.name);
      setValue("price", infos.price);
      setValue("quantityStock", infos.quantityStock);
    }
  };

  useEffect(() => {
    setInitialValues();
  }, [infos]);

  const getInfos = async () => {
    try {
      const { data } = await api.get(`/products/${modal.modalId}`);
      console.log(data);
      setInfos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <ModalContent className="modalContent">
      <header>
        <span>Editar</span>
        <button
          onClick={() => dispatch({ type: "modalShow", modalShow: false })}
        >
          X
        </button>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputForm">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="inputForm">
          <label htmlFor="price">Preço</label>
          <input type='' {...register("price")} id="price" />
        </div>
        <div className="inputForm">
          <label htmlFor="quantity">Quantidade</label>
          <input type="number" {...register("quantityStock")} id="quantity" />
        </div>
        <button type="submit">Editar</button>
      </form>
    </ModalContent>
  );
};
