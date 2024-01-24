import { RootApi } from "../api/apiSlice";

export const BannerSlider = RootApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllBannerSlider: builder.query({
      query: () => '/bannerslider',
      providesTags:['bannerslider']
    }),
    fetchSingleBannerSlider:builder.query({
      query:(id)=>`/bannerslider/${id}`
    }),
    addNewBannerSlider:builder.mutation({
      query:(data)=>({
        url:'/bannerslider/create-banner-slider',
        method:'POST',
        body:data
      }),
      invalidatesTags:['bannerslider'],
    })
  }),
});

export const {useAddNewBannerSliderMutation,useFetchAllBannerSliderQuery,useFetchSingleBannerSliderQuery} = BannerSlider;
