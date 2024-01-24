import React from 'react'
import { useFetchAllBannerSliderQuery } from "../App/featchers/BannerSlider/BannerSliderApi";

function CreateSlider() {
    const {isLoading,isError,data} = useFetchAllBannerSliderQuery()
    console.log(data)
  return (
    <div>CreateSlider</div>
  )
}

export default CreateSlider