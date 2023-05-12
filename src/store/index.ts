
import { filtersReducer } from "./modules/filters/reducer";
import { modalReducer } from "./modules/modal/reducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        filters: filtersReducer
    },
  })

export default store;
      