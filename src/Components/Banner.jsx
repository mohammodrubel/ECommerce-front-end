import React from "react";
import BannerSlider from "./BannerSlider";
import CounDown from "./CounDown";
import Offer from "./Offer";

function Banner() {
  return (
   <div className="grid grid-cols-12 mt-5 items-center">
        <div className="lg:col-span-9 col-span-12 mt-5 mb-5">
          <BannerSlider/>
        </div>
        <div className="lg:col-span-3 col-span-12 mt-5 mb-5">
          <Offer/>
          <CounDown/>
        </div>
   </div>
  );
}

export default Banner;
