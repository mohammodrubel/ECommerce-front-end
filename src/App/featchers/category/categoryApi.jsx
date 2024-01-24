import { RootApi } from "../api/apiSlice";

export const CategoryApi = RootApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllCategory: builder.query({
      query: () => '/category',
      providesTags:['Category']
    }),
    fetchSingleProducts:builder.query({
      query:(id)=>`/category/${id}`
    }),
    addNewCategory:builder.mutation({
      query:(data)=>({
        url:'/category/create-category',
        method:'POST',
        body:data
      }),
      invalidatesTags:['category'],
    })
  }),
});

export const { useAddNewCategoryMutation,useFetchSingleProductsQuery,useFetchAllCategoryQuery} = CategoryApi;
