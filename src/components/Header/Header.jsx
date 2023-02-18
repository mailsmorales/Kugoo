import React from "react";
import { HeaderTop } from "./components/HeaderTop";
import { Navbar } from "./components/Navbar";

export const Header = () => {
  return (
    <div className="custom-container">
      <HeaderTop />
      <Navbar />
    </div>
  );
};
