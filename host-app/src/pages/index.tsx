import dynamic from 'next/dynamic';

// Remote component'i dinamik olarak import ediyoruz
const ProductList = dynamic(() => import('productsRemote/ProductList'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Host App</h1>
      <ProductList />  {/* ProductList bileşenini burada kullanıyoruz */}
    </div>
  );
}
