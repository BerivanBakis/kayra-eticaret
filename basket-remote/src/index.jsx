import React from 'react';
import ReactDOM from 'react-dom/client';
import Basket from './components/Basket';

const mockProducts = [
  { id: 1, title: "Test Ürün 1", price: 99.99 },
  { id: 2, title: "Test Ürün 2", price: 199.99 }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Basket products={mockProducts} />
);

