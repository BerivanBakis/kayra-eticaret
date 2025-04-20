'use client';

import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography, Image, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { addToBasket } from 'hostApp/basketSlice'; 

const { Title, Text } = Typography;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product: any) => {
    dispatch(addToBasket(product)); // ✅ Redux store’a ekliyoruz
    message.success(`"${product.title}" sepete eklendi!`);
  };

  return (
    <div style={{ maxWidth: '80%', margin: '0 auto', padding: '20px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
        Products
      </Title>

      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 240 }}>
                  <Image
                    alt={product.title}
                    src={product.image}
                    height={200}
                    style={{ objectFit: 'contain' }}
                    preview={false}
                  />
                </div>
              }
            >
              <div style={{ textAlign: 'center' }}>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {product.category}
                </Text>
                <Title level={5} ellipsis={{ rows: 1 }} style={{ marginTop: 4, marginBottom: 8 }}>
                  {product.title}
                </Title>
                <Text strong style={{ fontSize: 18, display: 'block', marginBottom: 10 }}>
                  ${product.price}
                </Text>

                <Button type="primary" onClick={() => handleAddToCart(product)}>
                  Sepete Ekle
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
