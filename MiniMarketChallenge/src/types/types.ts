export type Product = {
  id: number;
  name: string;
  price: number;
  url: string;
};

export type CartProduct = {
  product: Product;
  quantity: number;
};
