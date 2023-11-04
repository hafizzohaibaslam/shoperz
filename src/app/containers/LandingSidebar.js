"use client";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slices/isSidebarExpandedSlice";

const LandingSidebar = () => {
  const dispatch = useDispatch();
  const isSidebarExpanded = useSelector(state => {
    return state?.isSidebarExpanded;
  });

  useEffect(() => {
    if (isSidebarExpanded) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isSidebarExpanded]);

  return (
    <>
      <Sidebar
        toggleSidebar={() => dispatch(toggleSidebar())}
        isSidebarExpanded={isSidebarExpanded}
        type="landingSidebar"
      />
    </>
  );
};

export default LandingSidebar;
