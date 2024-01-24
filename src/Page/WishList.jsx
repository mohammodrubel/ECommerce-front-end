import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearWishlist, removeWishlist } from "../App/featchers/wishlist/wishListSlice";
import { addToCart } from "../App/featchers/cart/cartSlice";

function WishList() {
  const dispatch = useDispatch();
  const { wishlistItem } = useSelector((state) => state?.wishList);

  const addToCartHandler = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const handleAllClearCart = () => {
    dispatch(clearWishlist());
  };

  const removeHandler = (id) => {
    dispatch(removeWishlist(id));
  };

  return (
    <div>
      <h3 className="mt-5 text-center text-gray-600 md:text-4xl sm:2xl font-bold">
        Wishlist <i className="fa-regular fa-heart"></i>
      </h3>

      <div className="mx-auto container">
        <div className="overflow-x-auto">
          <table className="min-w-full mt-5 bg-white border border-gray-300">
            <tbody>
              {wishlistItem?.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">
                    <img className="w-28" src={item?.image} alt="" />
                  </td>
                  <td className="py-2 px-4 border-b">{item?.productName}</td>
                  <td className="py-2 px-4 border-b">${item?.price}</td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => addToCartHandler(item)}>
                      Add To Cart
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <i
                      onClick={() => removeHandler(item?._id)}
                      className="fa-solid text-red-500 fa-trash"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            onClick={handleAllClearCart}
            className="cursor-pointer text-end font-bold mt-2 px-5 py-2 text-red-600"
          >
            Remove All Wishlist Product
            <i className="fa-solid text-red-600 fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
}


export default WishList;
