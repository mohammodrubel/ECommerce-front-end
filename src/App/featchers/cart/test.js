import { createSlice as cartSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalAmount: 0,
};

export const productSlice = cartSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const existingProduct = state.cartItem.findIndex(
        (item) => item?.product?._id === action.payload.product._id
      );
      if (existingProduct >= 0) {
        state.cartItem[existingProduct].quantity += 1;
      } else {
        // asign A New Item
        let assignItem;

        // quantity given by user
        if (action.payload.quantity > 0) {
          assignItem = { ...action.payload, quantity: action.payload.quantity };
          state.cartItem.push(assignItem);
        } else {
          assignItem = { ...action.payload, quantity: 1 };
          state.cartItem.push(assignItem);
        }
        // localStorage
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      }
    },
    // clear cart
    clearCart: (state, action) => {
      state.cartItem = [];
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    removeCart: (state, action) => {
      const deleteProduct = state.cartItem.filter(
        (item) => item?.product?._id !== action.payload
      );
      state.cartItem = deleteProduct;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    calculatePrice: (state, action) => {
      const subTotal = state.cartItem.reduce((acc, item) => acc + (item?.product?.price * item.quantity), 0);
      state.cartTotalAmount = Number(subTotal);
    },
    incrementQuantity: (state, action) => {
      const existingProduct = state?.cartItem?.findIndex(
        (item) => item?.product?._id === action?.payload
      );
      if(existingProduct >= 0){
        state.cartItem[existingProduct].quantity += 1
        console.log(state)
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      }
    },
    decrementQuantity: (state, action) => {
      const existingProduct = state?.cartItem?.findIndex(
        (item) => item?.product?._id === action?.payload
      );
      if(existingProduct >= 0){
        state.cartItem[existingProduct].quantity -= 1
        console.log(state)
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      }
      if (state.cartItem[existingProduct].quantity === 0) {
        // Filter out the item with quantity 0 and update the state
        state.cartItem = state.cartItem?.filter((item) => item?.product?._id !== action?.payload);
      
        // Update localStorage with the modified cartItem
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      }
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeCart,
  incrementQuantity,
  decrementQuantity,
  calculatePrice
} = productSlice.actions;
export default productSlice.reducer;
