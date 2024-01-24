import React from "react";
import Cateory from "./Cateory";
import {useFetchAllOfferQuery} from '../../App/featchers/Offer/offerSlice'
import Loading from "../Loading";

function SecondNavbar() {
  const { isError, isLoading, data } = useFetchAllOfferQuery();
  let content = null 
  if(isLoading){
    content = <Loading/>
  }
  if(!isLoading && isError){
    content = <Error text="somthing went wrong" />
  }
  if(!isLoading && !isError && data?.data?.data?.length === 0){
    content = <Error text="Data Not Found" />
  }
  if(!isLoading && !isError && data?.data?.data?.length > 0){
    content = data?.data?.data.map((item,index)=> <div className="md:col-span-3 sm:col-span-6 col-span-12  shadow border pt-2 text-center">
    <p className="text-center font-medium">{item?.programName}</p>
    <p className="text-center font-medium">Get {item?.percentage}% OFF!</p>
</div>)
  }
  return (
    <>
      <div className="grid gap-5 grid-cols-12 justify-center items-center">
        <div className="md:col-span-3 sm:col-span-6 col-span-12  flex items-center gap-4 text-center">
          <Cateory/>
        </div>
        <div className="md:col-span-6 sm:col-span-6 col-span-12  text-center">
          <div className="flex">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full px-4 rounded-0  py-4 input-bordered border-r-0"
            />
            <button className="bg-[#FED700] rounded-sm font-bold text-white px-5">Search</button>
          </div>
        </div>
       {content}
      </div>
    </>
  );
}

export default SecondNavbar;
