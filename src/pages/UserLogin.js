import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="bg-white">
      <Link
        to="/"
        className="bg-violet-700 shadow-md shadow-white flex justify-center items-center fixed w-full py-3"
      >
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex justify-center items-center min-h-screen container mx-auto px-4 font-Nunito">
        <div className="flex flex-col gap-5 shadow-white shadow-md p-5 w-full max-w-lg bg-violet-700">
          <div className="flex">
            <Link
              to="/user-login"
              className={
                "flex-1 flex justify-center items-center py-2 font-bold text-white text-lg " +
                (window.location.pathname === "/user-login"
                  ? "border-white text-white border-b-2"
                  : "")
              }
            >
              Login
            </Link>
            <Link
              to="/user-signup"
              className={
                "flex-1 flex justify-center items-center py-2 font-bold text-white text-lg " +
                (window.location.pathname === "/user-signup"
                  ? "border-white text-white border-b-2"
                  : "")
              }
            >
              SignUp
            </Link>
          </div>
          <input
            type="number"
            placeholder="Phone number"
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100"
          />
          <button className="bg-white text-violet-700 font-bold p-5 rounded-sm">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
