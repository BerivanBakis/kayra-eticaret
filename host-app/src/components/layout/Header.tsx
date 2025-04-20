"use client";

import React from "react";
import { Layout, Menu, Space, Popover } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const CartPopoverContent = () => (
  <div style={{ width: 250 }}>
    <p>
      <strong>Sepet</strong>
    </p>
    <p>🛍️ Test ürünü 1</p>
    <p>🛒 Test ürünü 2</p>
    <p>💳 Toplam: 0₺</p>
  </div>
);
const menuItems = [
  { key: "women", label: "Women", href: "#women" },
  { key: "men", label: "Men", href: "#men" },
  { key: "kids", label: "Kids", href: "#kids" },
  { key: "giftcards", label: "Gift Cards", href: "#giftcards" },
].map(item => ({
  ...item,
  label: <a href={item.href}>{item.label}</a>,
}));

const AppHeader: React.FC = () => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 40px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Sol alan: logo + menü */}
      <div
        style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0 }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginRight: 32,
            whiteSpace: "nowrap",
          }}
        >
          LOGO
        </div>
        <Menu
          mode="horizontal"
          selectable={false}
          items={menuItems}
          style={{
            flex: 1,
            minWidth: 0,
            borderBottom: "none",
            overflow: "hidden",
            flexWrap: "nowrap",
          }}
        />
      </div>

      {/* Sağ ikonlar */}
      <Space size="large" style={{ marginLeft: 20 }}>
        <SearchOutlined style={{ fontSize: 20, cursor: "pointer" }} />

        <Popover
          content={<CartPopoverContent />}
          title={null}
          trigger="click"
          placement="bottomRight"
        >
          <ShoppingCartOutlined style={{ fontSize: 20, cursor: "pointer" }} />
        </Popover>

        <UserOutlined style={{ fontSize: 20, cursor: "pointer" }} />
      </Space>
    </Header>
  );
};

export default AppHeader;
