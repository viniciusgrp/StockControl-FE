export interface IFiltersReducer {
  orderBy?: string;
  limit?: number;
  inputSearch?: string;
  listStyle: string;
  totalOfPages: number;
  page: 1;
}

const initialState: IFiltersReducer = {
  listStyle: "box",
  totalOfPages: 1,
  page: 1,
};

export const filtersReducer: any = (
  state: IFiltersReducer = initialState,
  action: any
) => {
  switch (action.type) {
    case "orderBy":
      const { orderBy } = action;
      return { ...state, orderBy };
    case "limit":
      const { limit } = action;
      return { ...state, limit };
    case "inputSearch":
      const { inputSearch } = action;
      return { ...state, inputSearch };
    case "listStyle":
      const { listStyle } = action;
      return { ...state, listStyle };
    case "totalOfPages":
      const { totalOfPages } = action;
      return { ...state, totalOfPages };
    case "page":
      const { page } = action;
      return { ...state, page };
    default:
      return state;
  }
};
