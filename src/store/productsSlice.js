import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts =  createAsyncThunk(
    'posts/fetchProducts',
    async () => {
      const resp = await axios.get('https://dummyjson.com/products?limit=10&skip=10')
      return resp.data
    }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], 
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const selectedProduct = state.items.find(
        (product) => product.id === action.payload.productId
      );
      if (selectedProduct) {
        state.basket.push(selectedProduct);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload.products
    })
  }
});

export const {addToBasket} = productsSlice.actions;
export default productsSlice.reducer;


