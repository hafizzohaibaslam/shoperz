"use client";
import { createSlice } from "@reduxjs/toolkit";

const featuredProductsSlice = createSlice({
  name: "featuredProducts",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
  },
  // extraReducers(builder){
  //     builder.addCase(registerUser.pending,(state,action)=>{
  //         state.isLoading=true;

  //     });
  //     builder.addCase(registerUser.fulfilled,(state,action)=>{
  //         state.isLoading= false;
  //         state.data = action.payload;
  //     });
  //     builder.addCase(registerUser.rejected,(state,action)=>{
  //         state.isLoading= false;
  //         state.error = action.error;
  //     });

  // }
});

export const { setProducts } = featuredProductsSlice.actions;
export const featuredProductsReducer = featuredProductsSlice.reducer;
