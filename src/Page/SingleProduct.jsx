import React, { useState } from "react";
import { useFetchSingleProductsQuery } from "../App/featchers/product/productApi";
import { useParams } from "react-router-dom";
import Loading from "../Components/Error";
import Error from "../Components/Error";
import Active from "../Components/Active";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addQuantity } from "../App/featchers/cart/cartSlice";
import {addToWishlist} from "../App/featchers/wishlist/wishListSlice"

function SingleProduct() {
  const { id } = useParams();
  const { isLoading, isError, data } = useFetchSingleProductsQuery(id);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <Error text="something went wrong" />;
  }

  if (
    !isLoading &&
    !isError &&
    (!data?.data?.data || data?.data?.data.length === 0)
  ) {
    content = <Error text="Data Not Found" />;
  }
  const mainData = data?.data?.data;

  const addToCartHandeler = (product) => {
    dispatch(addQuantity({ product, quantity: Number(quantity) }));
  };
  const addToWishlistHandeler = (product)=>{
    dispatch(addToWishlist(product))
  }

  return (
    <div className="container mx-auto">
      {content}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <img src={mainData?.image} alt="" />
        </div>
        <div>
          <h2 className="text-4xl text-gray-500 mt-3 font-bold uppercase">
            {mainData?.productName}
          </h2>
          <h2 className=" text-gray-500 mt-3 text-2xl font-bold uppercase">
            ${mainData?.price}
          </h2>
          {mainData?.totalStock === 0 ? (
            <b className="text-gray-500 mt-3">
              <Active /> Out Of Stock
            </b>
          ) : (
            <b className="text-gray-500 mt-3">
              <Active /> In stock - Ready to ship
            </b>
          )}
          <br />
          <b className="text-gray-500">
            Current Stocks: {mainData?.totalStock}
          </b>
          <div className="flex gap-5 mt-3 items-center">
            <FaPlus
              style={{
                padding: "4px",
                border: "1px solid gray",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                marginTop: "1px",
              }}
              onClick={(e) => setQuantity(quantity + 1)}
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
              className="p-1 bg-slate-200 border w-20"
              min={1}
            />
            {quantity === 1 ? (
              <FaMinus
                style={{
                  padding: "4px",
                  border: "1px solid gray",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  marginTop: "1px",
                }}
              />
            ) : (
              <FaMinus
                style={{
                  padding: "4px",
                  border: "1px solid gray",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  marginTop: "1px",
                }}
                onClick={(e) => setQuantity(quantity - 1)}
              />
            )}
          </div>
          <div className="flex gap-5">
           
            <button
            onClick={() => addToCartHandeler(mainData)}
             className="text-xl w-32 h-10 mt-5 bg-slate-200 font-bold text-gray-800 relative overflow-hidden group z-10 rounded-lg">
              <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
              <span className="absolute bg-[#FED700] rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
              <span className="absolute bg-[#FF4C4C] rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
              <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">
                Add To Cart
              </span>
              Add To Cart
            </button>
            <button
            onClick={() => addToWishlistHandeler(mainData)}
             className="text-xl w-32 h-10 mt-5 bg-slate-200 font-bold text-gray-800 relative overflow-hidden group z-10 rounded-lg">
              <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
              <span className="absolute bg-[#FED700] rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
              <span className="absolute bg-[#FF4C4C] rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
              <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">
                WishList
              </span>
              WishList
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
