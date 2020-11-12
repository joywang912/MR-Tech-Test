import React, { useState } from "react";
import { hot } from "react-hot-loader";
import Header from "./Header";
import ProductContent from "./ProductContent";
import ProductSelection from "./ProductSelection";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState({
    s: 0,
    m: 0,
    l: 0,
  });
  return (
    <div>
      <Header selectedProducts={selectedProducts} />
      <div className="main-container content">
        <div className="left-container">
          <div className="product-image">
            <img src="./images/classic-tee.jpg" />
          </div>
        </div>
        <div className="right-container">
          <ProductContent />
          <ProductSelection
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default hot(module)(App);
