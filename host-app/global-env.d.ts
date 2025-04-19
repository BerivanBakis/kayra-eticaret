declare module 'productsRemote/ProductList' {
    const ProductList: React.ComponentType;
    export default ProductList;
  }

  declare module 'basketRemote/Basket' {
    const Basket: React.ComponentType<{ products: { id: number, title: string, price: number }[] }>;
    export default Basket;
  }
  