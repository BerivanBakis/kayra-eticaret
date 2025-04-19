// src/components/Basket.js
import React from 'react';

const Basket = ({ products }) => {
  return (
    <div>
      <h2>Sepet</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - {product.price}₺
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;  // Default export
