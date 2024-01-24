import React from 'react'
import '../Style/Offer.css'
import { useFetchAllOfferQuery } from '../App/featchers/Offer/offerSlice';
import Loading from './Loading';
import Error from './Error';

function Offer() {
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
    content = data?.data?.data.map((item,index)=><div className='offer mb-10'>
    <h1 className='text-4xl text-center mt-5 font-bold text-white'>{item?.programName}</h1>
    <p className='text-center font-bold mt-5 text-2xl text-white'>Go Shop For {item?.percentage} %</p>
    <p className='text-center font-bold mt-5  text-white'>coupon code: {item?.couponCode}</p>
</div>)
  }


  return (
    <>{content}</>
  )
}

export default Offer
