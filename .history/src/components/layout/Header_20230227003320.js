import React from "react";
import { Navlink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 py-10 mb-5 text-white">
      <span className="text-primary">Home</span>
      <span>Movies</span>
    </header>
  );
};

export default Header;
