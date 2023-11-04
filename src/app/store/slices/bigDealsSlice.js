"use client";
import { createSlice } from "@reduxjs/toolkit";

const bigDealsSlice = createSlice({
  name: "bigDeals",
  initialState: {
    data: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProducts } = bigDealsSlice.actions;
export const bigDealsReducer = bigDealsSlice.reducer;
