import React, { useEffect } from "react";
import Slider from "react-slick";
import { useFetchAllBannerSliderQuery } from "../App/featchers/BannerSlider/BannerSliderApi";
import Loading from "./Loading";
import Error from "./Error";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Style/BannerSlider.css";
import { Link } from "react-router-dom";

function BannerSlider() {
  const { isError, isLoading, data } = useFetchAllBannerSliderQuery();
  const mainData = data?.data?.data;

  var settings = {
    dots: true,
    arrows: false,
    waitForAnimate: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (isError) {
    content = <Error text="Something Went Wrong" />;
  }
  if (mainData?.length === 0) {
    content = <Error text="No Data Found" />;
  } else {
    content = (
      <div className="relative mt-10">
        <Slider {...settings}>
         {
          mainData?.map((item)=><div >
            <div className="grid grid-cols-2 justify-between items-center">
            <div className="content">
              <div><h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">{item?.title}</h1></div>
              </div>
            <img src={item?.image} className="w-full h-full" alt="" />
            </div>
          </div>)
         }
        </Slider>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default BannerSlider;
