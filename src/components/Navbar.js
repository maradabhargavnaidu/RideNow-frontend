import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  return (
    <nav className="bg-violet-700 shadow-white shadow-md py-3 fixed w-full top-0 z-50 px-5 font-Nunito">
      <div className="text-white flex justify-between items-center container mx-auto">
        <Link to="/">
          <img src={logo} className="w-[120px] md:w-[150px]" alt="logo" />
        </Link>

        <div className="block md:hidden cursor-pointer">
          {nav ? (
            <i
              className="fa-solid fa-xmark text-white text-xl cursor-pointer"
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
        {state.isAuthenticated ? (
          <div className="gap-5 items-center hidden md:flex">
            <i className="fa-solid fa-circle-user font-extrabold text-4xl cursor-pointer"></i>

            <button
              onClick={() => dispatch({ type: "LOGOUT" })}
              className="font-extrabold group relative hover:border-white hover:border-2 text-md bg-white text-violet-700 p-3 cursor-pointer"
            >
              <span className="absolute top-0 right-0 flex w-0 h-full mb-0 transition-all duration-400 ease-out transform translate-x-0 bg-violet-700 group-hover:w-full opacity-100"></span>
              <span className="relative group-hover:text-white">SignOut</span>
            </button>
          </div>
        ) : (
          <div className="gap-5 items-center hidden md:flex">
            <Link
              to="/pick-account"
              className="font-extrabold text-md cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-extrabold group relative hover:border-white hover:border-2 text-md bg-white text-violet-700 p-3 cursor-pointer"
            >
              <span className="absolute top-0 right-0 flex w-0 h-full mb-0 transition-all duration-400 ease-out transform translate-x-0 bg-violet-700 group-hover:w-full opacity-100"></span>
              <span className="relative group-hover:text-white">SignUp</span>
            </Link>
          </div>
        )}

        {/* Mobile Navbar */}

        <div
          className={
            "gap-5 items-center md:hidden flex flex-col left-0 p-5 absolute w-full z-10 duration-1000 bg-violet-700  font-Nunito " +
            (nav
              ? "translate-y-0 bg-violet-700 top-[73px]"
              : "-translate-y-full bg-transparent")
          }
          onClick={() => setNav(!nav)}
        >
          <Link
            to="/pick-account"
            className="font-semibold text-md cursor-pointer p-3"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-extrabold group relative hover:border-white hover:border-2 text-md bg-white text-violet-700 p-3 cursor-pointer"
          >
            <span className="absolute top-0 right-0 flex w-0 h-full mb-0 transition-all duration-400 ease-out transform translate-x-0 bg-violet-700 group-hover:w-full opacity-100"></span>
            <span className="relative group-hover:text-white">SignUp</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
