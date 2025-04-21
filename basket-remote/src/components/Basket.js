import React from 'react';
import { List, Avatar, Typography, Button, Row, Col, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from 'hostApp/basketSlice'; 

const { Text } = Typography;

const Basket = ({ products }) => {
  const dispatch = useDispatch();

  const handleRemoveToCart = (id) => {
    dispatch(removeFromBasket(id)); 
  };

  const subtotal = products.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: '24px', maxWidth: '80%', margin: '0 auto' }}>
      <h2>SEPET</h2>
      <List
        itemLayout="horizontal"
        dataSource={products}
        renderItem={product => (
          <List.Item>
            <Row style={{ width: '100%' }} align="top">
              <Col flex="100px">
                <Avatar
                  shape="square"
                  size={130}
                  src={product.image}
                  alt={product.title}
                />
              </Col>

              <Col flex="auto" style={{ paddingLeft: '16px' }}>
                <Text strong style={{ display: 'block' }}>{product.title}</Text>
                <Text type="secondary">{product.category}</Text>
              </Col>

              <Col>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', height: '130px' }}>
                  <Text strong>{product.price}₺</Text>
                  <Button danger size="small" onClick={() => handleRemoveToCart(product.id)}>
                    Remove
                  </Button>
                </div>
              </Col>
            </Row>
          </List.Item>
        )}
      />

      <Divider />

      <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
        <Col>
          <Text strong style={{ fontSize: '16px' }}>Subtotal:</Text>
        </Col>
        <Col>
          <Text strong style={{ fontSize: '18px' }}>{subtotal.toFixed(2)}₺</Text>
        </Col>
      </Row>

    </div>
  );
};

export default Basket;
