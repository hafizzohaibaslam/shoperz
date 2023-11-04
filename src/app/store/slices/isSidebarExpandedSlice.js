"use client";
import { createSlice } from "@reduxjs/toolkit";

const isSidebarExpandedSlice = createSlice({
  name: "isSidebarExpanded",
  initialState: false,
  reducers: {
    toggleSidebar: state => {
      return !state;
    },
  },
});

export const { toggleSidebar } = isSidebarExpandedSlice.actions;
export const isSidebarExpandedReducer = isSidebarExpandedSlice.reducer;
