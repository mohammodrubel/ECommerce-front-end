import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decressQuantity, incressQuantity } from "../App/featchers/cart/cartSlice";


function Cart() {
  const dispatch = useDispatch();
  const { cartItem} = useSelector((state) => state?.cart);
  
  const handelIncrese = (id)=>{
    dispatch(incressQuantity(id))
  }
  const handelDecrese = (id)=>{
    dispatch(decressQuantity(id))
  }

 

  return (
    <div>
      <h3 className="mt-5 text-center text-gray-600 md:text-4xl sm:2xl font-bold">
        SHOPPING CART <i className="fa-solid fa-cart-shopping"></i>
      </h3>
      {cartItem.length && (
        <div className="mx-auto container">
          <div class="overflow-x-auto">
            <table class="min-w-full mt-5 bg-white border border-gray-300">
              {cartItem.map((item, index) => {
                return (
                  <tbody>
                    <tr>
                      <td class="py-2 px-4 border-b">
                        <img
                          className="w-28"
                          src={item?.product?.image}
                          alt=""
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        {item?.productName}
                      </td>
                      <td class="py-2 px-4 border-b">
                        ${item?.price}
                      </td>
                      <td class="py-2 px-4 border-b">
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
                            onClick={()=>handelIncrese(item._id)}
                          />
                          <input
                            type="number"
                            value={item?.quantity}
                            className="rounded bg-slate-200 p-1 mt-3 border w-20"
                            style={{width:"60px"}}
                            disabled
                          />
                          <FaMinus
                            style={{
                              padding: "4px",
                              border: "1px solid gray",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              marginTop: "1px",
                            }}
                            onClick={()=>handelDecrese(item._id)}
                          />
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b">
                        <i
                          class="fa-solid text-red-500 fa-trash"
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <div
              
              className="cursor-pointer text-end font-bold mt-2 px-5 py-2 text-red-600"
            >
              Remove All Product
              <i class="fa-solid text-red-600 fa-trash-can"></i>
            </div>
            <div className="text-2xl text-end p-2 font-bold">SubTotal:</div>
          </div>
        </div>
      )}
      {!cartItem.length && (
        <h3 className="text-center font-bold text-gray-600 mt-5">
          Your Cart is Empty
        </h3>
      )}
    </div>
  );
}

export default Cart;
