export interface IModalReducer {
  modalType?: string;
  modalShow: boolean;
  modalId?: number;

}

const initialState = {
  modalShow: false
}

export const modalReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case "modalType":
      const { modalType } = action
      return {...state, modalType}
    case "modalShow":
      const { modalShow } = action
      return { ...state, modalShow }
    case "modalId":
      const { modalId } = action
      return {...state, modalId}
    default:
      return state;
  }
};
