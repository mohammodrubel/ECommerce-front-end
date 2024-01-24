import { createSlice as cartSlice } from "@reduxjs/toolkit";
import { Toaster, toast } from "sonner";

const initialState = {
  cartItem: localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [],
};

console.log(initialState)
export const productSlice = cartSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const existingProduct = state.cartItem.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        if (existingProduct.totalStock <= existingProduct.quantity) {
          toast.error("Sorry, the item is out of stock.");
        } else {
          existingProduct.quantity += 1;
          localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
          toast.success("added to cart");
        }
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.cartItem.push(newProduct);
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        toast.success("added to cart");
      }
    },

    addQuantity: (state, action) => {
      const existingProductIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload.product._id
      );

      if (existingProductIndex !== -1) {
        const updatedCartItem = [...state.cartItem]; // Create a copy of the array
        updatedCartItem[existingProductIndex] = {
          ...updatedCartItem[existingProductIndex],
          quantity: action.payload.quantity,
        };
        if (
          updatedCartItem[existingProductIndex].totalStock <
          action.payload.quantity
        ) {
          toast.error(`Sorry, the item is out of stock.`);
          return;
        }

        state.cartItem = updatedCartItem;
        localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
        toast.success("Quantity updated in cart");
      } else {
        if (action.payload.product.totalStock < action.payload.quantity) {
          toast.error("Quantity updated in cart");
        } else {
          const newProduct = {
            ...action.payload.product,
            quantity: action.payload.quantity,
          };
          state.cartItem.push(newProduct);
          localStorage.setItem("cartItem", JSON.stringify(state.cartItem));

          toast.success("Added to cart");
        }
      }
    },

    incressQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.cartItem.find((item) => item._id === itemId);
    
      if (itemToUpdate) {
        if (itemToUpdate.quantity + 1 > itemToUpdate.totalStock) {
          toast.error(`Sorry, the item is out of stock.`);
        } else {
          itemToUpdate.quantity += 1;
          localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
          state.cartItem = [...state.cartItem];
        }
      }
    },

    decressQuantity: (state, action) => {
      const itemId = action.payload;
      const updatedCartItems = state.cartItem.map(item => {
        if (item._id === itemId) {
          const updatedItem = { ...item, quantity: Math.max(0, item.quantity - 1) };
          return updatedItem;
        }
        return item;
      });
      const filteredCartItems = updatedCartItems.filter(item => item.quantity > 0);
      state.cartItem = filteredCartItems;
      localStorage.setItem("cartItem", JSON.stringify(filteredCartItems));
    },
  }    
});

export const {
  addToCart,
  addQuantity,
  incressQuantity,
  decressQuantity
} = productSlice.actions;
export default productSlice.reducer;

