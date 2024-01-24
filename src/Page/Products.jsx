import React from "react";
import Product from "./Product";
import {useFetchAllProductsQuery} from '../App/featchers/product/productApi'

function Products() {
  const {isLoading,isError,data} = useFetchAllProductsQuery()
  
  return (
    <div className="container mt-5 mx-auto">
      <div className="grid mx-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center text-center">
        {
          data?.data?.data?.map((item,index)=> <Product item={item}/>)
        }
      </div>
    </div>
  );
}

export default Products;


