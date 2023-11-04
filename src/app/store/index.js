"use client";
import { configureStore } from "@reduxjs/toolkit";
import { featuredProductsReducer } from "./slices/featuredProductsSlice";
import { bigDealsReducer } from "./slices/bigDealsSlice";
import { isSidebarExpandedReducer } from "./slices/isSidebarExpandedSlice";
import { productsReducer } from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    featuredProducts: featuredProductsReducer,
    bigDeals: bigDealsReducer,
    isSidebarExpanded: isSidebarExpandedReducer,
  },
});

export { store };
