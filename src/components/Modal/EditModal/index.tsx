import { useDispatch } from "react-redux";
import { ModalContent } from "./style";
import { api } from "../../../services";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IStore } from "../../../store";

interface IProps {
  modalType: string;
}

export const EditModal = ({modalType}: IProps) => {
  const modal = useSelector((state: IStore) => state.modal);
  const [infos, setInfos] = useState<any>();
  
  const { register, handleSubmit, setValue } = useForm()
  
  const dispatch = useDispatch();

  const onSubmit = async (formData: any) => {
    if (modalType === 'add') {
      const price = formData.price.replace(",", ".")
      try {
        await api.post("/products", {
          name: formData.name,
          price: Number(price),
          quantityStock: Number(formData.quantityStock)
        })
        dispatch({type: "modalShow", modalShow: false})
      } catch (error) {
        console.error(error)
      }
    } else if (modalType === 'edit') {
      const price = formData.price || null
      const name = formData.name || null
      const quantityStock = Number(formData.quantityStock) || null
      try {
        await api.patch(`/products/${modal.modalId}`, {
          name,
          price,
          quantityStock
        })
        dispatch({type: "modalShow", modalShow: false})
      } catch (error) {
        console.error(error)
      }
    }
  }


  const setInitialValues = () => {
    if (infos?.name && modalType === 'edit') {
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
      setInfos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (modalType === 'edit') getInfos();
  }, []);

  return (
    <ModalContent className="modalContent">
      <header>
        <span>{modalType === 'edit' ? 'Editar' : "Adicionar ao estoque"}</span>
        <button
          onClick={() => dispatch({ type: "modalShow", modalShow: false })}
        >
          X
        </button>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputForm">
          <label htmlFor="name">Nome</label>
          <input type="text" required id="name" {...register("name")} />
        </div>
        <div className="inputForm">
          <label htmlFor="price">Preço</label>
          <input type='number' required min={0} step={0.01} {...register("price")} id="price" />
        </div>
        <div className="inputForm">
          <label htmlFor="quantity">Quantidade</label>
          <input type="number" required min={0} {...register("quantityStock")} id="quantity" />
        </div>
        {modalType === 'edit' ? <button type="submit">Editar</button> : <button type="submit" >Adicionar ao estoque</button>}
      </form>
    </ModalContent>
  );
};
