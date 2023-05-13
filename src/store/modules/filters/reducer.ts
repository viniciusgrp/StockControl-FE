export interface IFiltersReducer {
    orderBy?: string;
    limit?: number;
  inputSearch?: string;
  listStyle: string;
}

const initialState: IFiltersReducer = {
  listStyle: "box"
}

export const filtersReducer: any = (state:IFiltersReducer = initialState, action: any) => {
  switch (action.type) {
    case "orderBy":
      const { orderBy } = action
      return { ...state, orderBy }
    case "limit":
      const { limit } = action
      return { ...state, limit }
    case "inputSearch":
      const { inputSearch } = action
      return { ...state, inputSearch }
    case "listStyle":
      const { listStyle } = action
      return {...state, listStyle}
    default:
      return state;
  }
};