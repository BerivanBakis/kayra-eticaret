'use client';

import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store/store'; 

const ProductList = dynamic(() => import('productsRemote/ProductList'), { ssr: false });
const Basket = dynamic(() => import('basketRemote/Basket'), { ssr: false });

export default function Home() {
  const basketItems = useSelector((state: RootState) => state.basket.items);

  return (
    <div>
      <ProductList />
    </div>
  );
}
