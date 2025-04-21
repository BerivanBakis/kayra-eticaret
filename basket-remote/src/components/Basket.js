// src/components/Basket.js
import React from 'react';
import { List, Avatar, Typography, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from 'hostApp/basketSlice'; 

const { Text } = Typography;

const Basket = ({ products }) => {
  const dispatch = useDispatch();

    const handleRemoveToCart = (id) => {
      dispatch(removeFromBasket(id)); 
    };

  return (
    <div style={{ padding: '24px', maxWidth: '80%', margin: '0 auto' }}>
      <h2>Sepetttt</h2>
      <List
        itemLayout="horizontal"
        dataSource={products}
        renderItem={product => (
          <List.Item>
            <Row style={{ width: '100%' }} align="top">
              
              {/* Ürün Resmi */}
              <Col flex="100px">
                <Avatar
                  shape="square"
                  size={130}
                  src={product.image}
                  alt={product.title}
                />
              </Col>

              {/* Ürün Bilgileri */}
              <Col flex="auto" style={{ paddingLeft: '16px' }}>
                <Text strong style={{ display: 'block' }}>{product.title}</Text>
                <Text type="secondary">{product.category}</Text>
              </Col>

              {/* Fiyat ve Buton Alanı */}
              <Col>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', height: '130px' }}>
                  
                  {/* Fiyat (üstte) */}
                  <Text strong>{product.price}₺</Text>

                  {/* Remove Butonu (altta) */}
                  <Button danger size="small" onClick={() => handleRemoveToCart(product.id)}>
                    Remove
                  </Button>

                </div>
              </Col>

            </Row>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Basket;
