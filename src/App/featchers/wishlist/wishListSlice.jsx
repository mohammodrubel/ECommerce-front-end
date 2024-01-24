import { createSlice } from "@reduxjs/toolkit";
import { Toaster, toast } from "sonner";

const initialState = {
  wishlistItem: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // add to wishlist
    addToWishlist: (state, action) => {
        const existingProductIndex = state.wishlistItem.findIndex((item) => item._id === action.payload._id);
    
            if(existingProductIndex >= 0){
                toast.success("added to wishlist");
            }else{
                let wishlistData = {...action.payload}
                state.wishlistItem?.push(wishlistData)
                localStorage.setItem("wishlist",JSON.stringify(state.wishlistItem))
                toast.success("added to wishlist");
            }
    },
    // clear wishlist
    clearWishlist: (state, action) => {
      state.wishlistItem = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItem));
    },
    removeWishlist: (state, action) => {
        const filteredItems = state.wishlistItem.filter((item) => item._id !== action.payload);
        state.wishlistItem = filteredItems;
        localStorage.setItem("wishlist", JSON.stringify(state.wishlistItem));
    },
   
    
    
  },
});

export const {
  addToWishlist,
  clearWishlist,
  removeWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
