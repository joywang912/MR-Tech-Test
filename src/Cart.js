import React from "react";

const Cart = ({ selectedProducts }) => {
  return (
    <div>
      {Object.keys(selectedProducts).map((size) => {
        if (selectedProducts[size] > 0) {
          return (
            <div className="cart-item" key={size}>
              <div className="cart-item__image">
                <img src="./images/classic-tee.jpg" height="100px" />
              </div>
              <div>
                <div>Classic Tee</div>
                <div>
                  {selectedProducts[size]} x <strong>$75.00</strong>
                </div>
                Size: {size}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cart;
