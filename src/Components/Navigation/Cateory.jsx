import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useFetchAllCategoryQuery } from "../../App/featchers/category/categoryApi";
import Loading from "./../Loading";
import Error from "./../Error";

function Cateory() {
  const { isError, isLoading, data } = useFetchAllCategoryQuery();
  const mainData = data?.data?.data;
  console.log(mainData);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error text="somthing Went Wrong" />;
  }
  if (!isLoading && !isError && mainData?.length === 0) {
    content = <Error text="No Data Found" />;
  }
  if (!isLoading && !isError && mainData?.length > 0) {
    content = mainData.map((item) => (
      <li className="p-3 border-b">
        <Link className="w-full " to="/">
          {item?.name}
        </Link>
      </li>
    ));
  }
  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer bg-[#FED700]  flex gap-3 relative justify-between items-center text-center w-full text-white font-bold p-2"
      >
        <h3 className="text-2xl">Category </h3>
        <FaBars />
      </div>

      {isDropdownOpen && (
        <ul
          className="absolute bg-[#FED700]  text-white font-bold p-3 mt-2"
          style={{ zIndex: "1000" }}
        >
          {content}
        </ul>
      )}
    </div>
  );
}

export default Cateory;
