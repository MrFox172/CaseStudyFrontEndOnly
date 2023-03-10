import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../interfaces/Product';
import { ProductDetail } from '../interfaces/ProductDetail';

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        currentCart:[[<Product>{},0]],
        status: "idle",
        error: null
    },
    reducers: {
        getCartFromLocal(state) {
            state.currentCart = JSON.parse(localStorage.getItem("cart") || "{}");
        }
    },
    extraReducers: (builder) => {
        
    }
});

export const {getCartFromLocal} = cartSlice.actions;
export default cartSlice.reducer;