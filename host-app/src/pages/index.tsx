import dynamic from 'next/dynamic';

// Remote component'i dinamik olarak import ediyoruz
const ProductList = dynamic(() => import('productsRemote/ProductList'), { ssr: false });
const Basket = dynamic(() => import('basketRemote/Basket'), { ssr: false });

const mockProducts = [
  { id: 1, title: "Sepetteki Ürün X", price: 99.99 },
  { id: 2, title: "Sepetteki Ürün Y", price: 189.99 }
];
export default function Home() {
  return (
    <div>
      {/* <h1>Host App</h1> */}
      <ProductList />  
      <Basket products={mockProducts} />
    </div>
  );
}
