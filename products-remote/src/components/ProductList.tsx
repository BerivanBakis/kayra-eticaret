// ProductList.tsx
import React, { useState, useEffect } from 'react';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);  // Ürünlerin tipi

  // Fake Store API'den veri çekme
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductList;
