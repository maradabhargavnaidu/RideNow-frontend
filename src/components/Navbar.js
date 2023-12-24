import React from "react";
import logo from "../assets/Logo.svg";
const Navbar = () => {
  return (
    <nav className="bg-black py-3 fixed w-full top-0 z-50 px-5">
      <div className="text-white flex justify-between items-center container mx-auto">
        <img src={logo} className="w-[120px] md:w-[150px]" />
        <div className="font-semibold text-sm">Login/Signup</div>
      </div>
    </nav>
  );
};

export default Navbar;
