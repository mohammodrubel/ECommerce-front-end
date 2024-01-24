import React from "react";
import "../Style/Product.css";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addToCart } from "../App/featchers/cart/cartSlice";
import { addToWishlist } from "../App/featchers/wishlist/wishListSlice";

function Product({ item }) {
  const dispatch = useDispatch()
  const {
    productName,
    category,
    price,
    currency,
    description,
    image,
    totalStock,
    _id,
  } = item;


  const addToCartHandeler = (product)=>{
    dispatch(addToCart(product))
  }

  const addToWishlistHandeler = (product)=>{
    dispatch(addToWishlist(product))
  }

  return (
    <div className="mt-10 mx-auto">
      <div className="image">
        <img src={image} alt="item.title" className="img_image rounded" />
        <div className="img_overlay img_overla__blur">
          <i
            style={{ fontSize: "20px" }}
            className="fa-solid fa-cart-shopping"
          ></i>
          <i style={{ fontSize: "20px" }} className="fa-regular fa-eye"></i>
          <i style={{ fontSize: "20px" }} onClick={()=>addToWishlistHandeler(item)} className="fa-regular fa-heart"></i>
          <button onClick={()=>addToCartHandeler(item)} className="custom-btn btn-10">Add To Cart</button>
        </div>
      </div>
      <Link className="p-2" to={_id}>
        <p className="text-gray-800 text-2xl">
          <b>{productName}</b>
        </p>
        <div className="flex gap-3 justify-evenly">
          <p className="text-gray-500"><b>Stock: {totalStock}</b></p>
          <p className="text-gray-500"><b>Stock: {price}</b></p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
