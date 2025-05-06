"use client";
import CartPopoverContent from "./CartPopoverContent";
import React from "react";
import { Layout, Menu, Space, Popover, Badge } from "antd";
import Link from "next/link";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../shared/store/store";

const { Header } = Layout;

const menuItems = [
  { key: "women", label: "Women", href: "#women" },
  { key: "men", label: "Men", href: "#men" },
  { key: "kids", label: "Kids", href: "#kids" },
  { key: "giftcards", label: "Gift Cards", href: "#giftcards" },
].map((item) => ({
  ...item,
  label: <a href={item.href}>{item.label}</a>,
}));

const AppHeader: React.FC = () => {
  const basketItems = useSelector((state: RootState) => state.basket.items);

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

      <div style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginRight: 32,
            whiteSpace: "nowrap",
          }}
        >
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          LOGO
        </Link>
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


      <Space size="large" style={{ marginLeft: 20 }}>
        <SearchOutlined style={{ fontSize: 20, cursor: "pointer" }} />

        <Popover
          content={<CartPopoverContent />}
          title={null}
          trigger="click"
          placement="bottomRight"
        >
          <Badge count={basketItems.length} size="small" overflowCount={99}>
            <ShoppingCartOutlined style={{ fontSize: 20, cursor: "pointer" }} />
          </Badge>
        </Popover>

        <UserOutlined style={{ fontSize: 20, cursor: "pointer" }} />
      </Space>
    </Header>
  );
};

export default AppHeader;
