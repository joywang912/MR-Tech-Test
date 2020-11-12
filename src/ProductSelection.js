import React, { useState } from "react";
import { Radio } from "antd";

const ProductSelection = ({ selectedProducts, setSelectedProducts }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeSize = (e) => {
    setSelectedSize(e.target.value);
    setErrorMsg("");
  };
  const onSubmitSelection = () => {
    if (!selectedSize) {
      setErrorMsg("Please Select Size!");
      return;
    }

    setSelectedProducts({
      ...selectedProducts,
      [selectedSize]: selectedProducts[selectedSize] + 1,
    });
  };
  return (
    <div className="product-selection">
      <div>
        <strong>
          size <span className="required-star">*</span>
        </strong>
        <strong className="size-value">{selectedSize}</strong>
      </div>
      <div className="size-options">
        <Radio.Group onChange={onChangeSize} value={selectedSize}>
          <Radio.Button value="s">S</Radio.Button>
          <Radio.Button value="m">M</Radio.Button>
          <Radio.Button value="l">L</Radio.Button>
        </Radio.Group>
      </div>
      {errorMsg && <div className="error">{errorMsg}</div>}
      <div className="prodcut-add-button">
        <button className="button" onClick={onSubmitSelection}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductSelection;
