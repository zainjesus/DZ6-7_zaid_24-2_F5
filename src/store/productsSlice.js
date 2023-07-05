import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: data, 
    basket: 0
  },
  reducers: {
    addToBasket: (state) => {
        state.basket += 1
    }
  }
});

export const {addToBasket} = productsSlice.actions;
export default productsSlice.reducer;
