import { RootApi } from "../api/apiSlice";

export const OfferSlice = RootApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllOffer: builder.query({
      query: () => '/offer',
      providesTags:['offer']
    }),
    fetchSingleOffer:builder.query({
      query:(id)=>`/offer/${id}`
    }),
    addNewOffer:builder.mutation({
      query:(data)=>({
        url:'/offer/create-offer',
        method:'POST',
        body:data
      }),
      invalidatesTags:['offer'],
    })
  }),
});

export const {useAddNewOfferMutation,useFetchAllOfferQuery,useFetchSingleOfferQuery} = OfferSlice;
