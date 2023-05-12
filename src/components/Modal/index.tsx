import { useSelector } from "react-redux";
import { EditModal } from "./EditModal";
import { ModalStyle } from "./style";
import { DeleteModal } from "./DeleteModal";

export const Modal = () => {
    const type = useSelector((state: any) => state.modal);

    console.log(type)
    
    if (type.modalType === 'edit') {
        return (
            <ModalStyle>
                <EditModal/>
            </ModalStyle>
        )
    }

    if (type.modalType === 'delete') {
        return (
            <ModalStyle>
                <DeleteModal/>
            </ModalStyle>
        )
    }

    return <></>
}