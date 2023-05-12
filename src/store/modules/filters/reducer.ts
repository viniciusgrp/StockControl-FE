export interface IFilters {
    orderBy?: string;
    limit?: number;
    inputSearch?: string;
}

const initialState: IFilters = {}

export const filtersReducer: any = (state:IFilters = initialState, action: any) => {
  switch (action.type) {
    case "orderBy":
      const { orderBy } = action
      return {...state, orderBy}
    case "limit":
      const { limit } = action
      return { ...state, limit }
    case "inputSearch":
      const { inputSearch } = action
      return {...state, inputSearch}
    default:
      return state;
  }
};