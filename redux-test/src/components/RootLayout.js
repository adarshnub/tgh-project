import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <div
      className="main-container  
    mx-auto 
    min-h-screen 
    bg-violet-600
    px-8
    md:px-20
    "
    >
      <Provider store={store}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};

export default RootLayout;
