
import { IFiltersReducer, filtersReducer } from "./modules/filters/reducer";
import { IModalReducer, modalReducer } from "./modules/modal/reducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        filters: filtersReducer
    },
})
  
export interface IStore {
  filters: IFiltersReducer;
  modal: IModalReducer
}

export default store;
      