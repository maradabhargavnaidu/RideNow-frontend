import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="bg-violet-700 shadow-white shadow-md py-3 fixed w-full top-0 z-50 px-5 font-CRound">
      <div className="text-white flex justify-between items-center container mx-auto">
        <Link to="/">
          <img src={logo} className="w-[120px] md:w-[150px]" alt="logo" />
        </Link>

        <div className="block md:hidden cursor-pointer">
          {nav ? (
            <i
              class="fa-solid fa-xmark text-white text-xl cursor-pointer"
              onClick={() => setNav(!nav)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars text-white text-xl cursor-pointer"
              onClick={() => setNav(!nav)}
            ></i>
          )}
        </div>
        {/* Desktop Navbar */}
        <div className="gap-5 items-center hidden md:flex">
          <Link
            to="/pick-account"
            className="font-semibold text-sm cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-semibold text-sm bg-white text-black p-3 cursor-pointer"
          >
            SignUp
          </Link>
        </div>
        {/* Mobile Navbar */}

        <div
          className={
            "gap-5 items-center md:hidden flex flex-col left-0 p-5 absolute w-full z-10 duration-1000 bg-violet-700  font-CRound " +
            (nav
              ? "translate-y-0 bg-black top-[73px]"
              : "-translate-y-full bg-transparent")
          }
          onClick={() => setNav(!nav)}
        >
          <Link
            to="/pick-account"
            className="font-semibold text-sm cursor-pointer p-3"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-semibold text-sm bg-white text-black p-3 cursor-pointer"
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
