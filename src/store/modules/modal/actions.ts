export const modalType = (a: any, modalType: string) => {
    return {
      type: "modalType",
      modalType,
    };
};
        
export const modalShow = (modalShow: string) => {
  return {
    type: "modalShow",
    modalShow
  }
}