export interface IProducts {
  pages: number;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantityStock: number;
}
