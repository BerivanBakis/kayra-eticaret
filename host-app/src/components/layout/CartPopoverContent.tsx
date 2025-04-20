"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../shared/store/store"; 
import { Button } from "antd";
import Link from "next/link";

const CartPopoverContent: React.FC = () => {
  const items = useSelector((state: RootState) => state.basket.items);
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ width: 250 }}>
      <p><strong>🛒 Sepetteki Ürünler</strong></p>
      {items.length === 0 ? (
        <p>Sepet boş</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between"}}>
              <span>{item.title}</span>
              <span style={{fontWeight:"bold", marginLeft:"10px" }}>{item.price.toFixed(2)}₺</span>
            </div>
          ))}
          <p><strong>💳 Toplam:</strong> {total.toFixed(2)}₺</p>
          <Link href="http://localhost:3000/basket">
            <Button type="primary" block>Sepete Git</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPopoverContent;
