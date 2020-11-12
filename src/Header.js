import React, { useRef } from "react";
import { Popover } from "antd";
import Cart from "./Cart";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = ({ selectedProducts }) => {
  const cartEl = useRef(null);
  const totalProducts =
    selectedProducts.s + selectedProducts.m + selectedProducts.l;

  const getCartButton = () => {
    return (
      <div className="cart" ref={cartEl}>
        <span className="sm-display">
          <ShoppingCartOutlined />
        </span>
        <span className="sm-hidden">My Cart</span>
        <span> ({totalProducts})</span>
      </div>
    );
  };
  return (
    <header>
      <div className="main-container">
        <div className="logo" />

        {totalProducts ? (
          <Popover
            content={<Cart selectedProducts={selectedProducts} />}
            trigger={["hover", "focus"]}
            placement="bottom"
            getPopupContainer={() => cartEl.current}
          >
            {getCartButton()}
          </Popover>
        ) : (
          getCartButton()
        )}
      </div>
    </header>
  );
};

export default Header;
