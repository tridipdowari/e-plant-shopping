import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  wishlist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // 🛒 CART
    addItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.amount;

        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== item.id);
        }
      }
    },

    // ❤️ WISHLIST
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(i => i.id === action.payload.id);

      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(i => i.id !== action.payload);
    }
  }
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  addToWishlist,
  removeFromWishlist
} = cartSlice.actions;

export default cartSlice.reducer;