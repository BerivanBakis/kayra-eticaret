import React from 'react';

const products = [
  { id: 1, name: 'MacBook Air', price: '$999' },
  { id: 2, name: 'iPhone 14', price: '$899' },
  { id: 3, name: 'iPad Pro', price: '$799' },
];

const ProductList = () => (
  <div>
    <h2>Ürünler</h2>
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} - {p.price}
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
