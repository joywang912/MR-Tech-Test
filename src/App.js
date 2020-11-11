import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Header from "./Header";
import ProductContent from "./ProductContent";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-container">
          <div className="left-container">
            <div className="product-image">
              <img src="./images/classic-tee.jpg" />
            </div>
          </div>
          <div className="right-container">
            <ProductContent />
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
