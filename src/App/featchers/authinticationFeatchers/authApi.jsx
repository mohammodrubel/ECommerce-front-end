import { RootApi } from "../api/apiSlice";

export const authSlice = RootApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url:'/auth/create-user',
        method:'POST',
        body:data
      }),
      invalidatesTags:['auth']
    }),
    login: builder.mutation({
      query: (data) => ({
        url:'/auth/login',
        method:'POST',
        body:data
      }),
      invalidatesTags:['auth']
    }),
  }),
});

export const {useRegistrationMutation,useLoginMutation} = authSlice;
