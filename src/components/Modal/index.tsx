import { useSelector } from "react-redux";
import { EditModal } from "./EditModal";
import { ModalStyle } from "./style";
import { DeleteModal } from "./DeleteModal";
import { IStore } from "../../store";

export const Modal = () => {
  const type = useSelector((state: IStore) => state.modal);

  console.log(type);

  if (type.modalType === "edit" || type.modalType === "add") {
    return (
      <ModalStyle>
        <EditModal modalType={type.modalType} />
      </ModalStyle>
    );
  }

  if (type.modalType === "delete") {
    return (
      <ModalStyle>
        <DeleteModal />
      </ModalStyle>
    );
  }

  return <></>;
};
