import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/navigation.css";
import MegaMenu1 from "./MegaMenu1";
import MeghaMenu2 from "./MeghaMenu2";
import MeghaMenu3 from "./MeghaMenu3";
import shoping from "../../img/13-2-shopping-free-png-image.png";
import {useSelector,useDispatch} from 'react-redux'
import { currentToken, logout } from "../../App/featchers/authinticationFeatchers/authSlice";
import {toast}from 'sonner'
function Navigation() {
  const [isShopActive, setShopActive] = useState(false);
  const token=useSelector(currentToken)
  const dispatch = useDispatch()
  const handleShopClick = () => {
    setShopActive(!isShopActive);
  };

  const handelLogout = ()=>{
    dispatch(logout())
    toast.success('logout successfull')
  }
  return (
    <div style={{ position: "sticky", top: '0',background:'white',zIndex:'1000',padding:'10px' }}>
      <div className="flex justify-around items-center">
        <h3 className="text-2xl p-2 text-gray-500 font-bold">Logo</h3>
        <div className="desktopNavMenu">
          <ul className="flex gap-5">
            <li>
              <Link className="font-bold text-gray-700" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold text-gray-700" to="/products">
                Products
              </Link>
            </li>
            <li className="shopLink">
              <Link
                className={`font-bold text-gray-700 ${isShopActive ? "active" : ""}`}
              >
                Links
                <div className={`megamenu ${isShopActive ? "active" : ""}`}>
                  <div className="block shop container mx-auto w-full">
                    <div className="grid lg:grid-cols-4 grid-cols-2  rounded border-b justify-between items-center">
                      <MegaMenu1 />
                      <MeghaMenu2 />
                      <MeghaMenu3 />
                      <img src={shoping} className="w-full" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link onClick={handleShopClick} className="font-bold text-gray-700" to="/">
                Cart
              </Link>
            </li>
            {token ? <li onClick={handelLogout}>
              <Link className="font-bold text-gray-700" to="/login">
                Logout
              </Link>
            </li>
            :
            <li>
              <Link className="font-bold text-gray-700" to="/login">
                Login
              </Link>
            </li>}
            <li>
              <Link onClick={handleShopClick} className="font-bold text-gray-700" to="/register">
              Registration
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex gap-4">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
