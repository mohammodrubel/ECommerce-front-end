import React from "react";
import "../Style/button.css";

function WishLIstButton({text}) {
  return (
    <div>
      <button className="cursor-pointer p-3 btn bg-gray-300 font-bold mt-5">
      <i class="fa-regular fa-heart"></i> Wishlist
      </button>
    </div>
  );
}

export default WishLIstButton;
