import React from "react";
import "../Style/button.css";

function AddToCartButton() {
  return (
    <div>
      <button className="cursor-pointer p-3 btn bg-gray-300 font-bold mt-5">
        <i className="fa-solid fa-cart-shopping"></i> AAdd To Cart
      </button>
    </div>
  );
}

export default AddToCartButton;
