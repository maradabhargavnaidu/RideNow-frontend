import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center flex-col md:flex-row">
        <div className="bg-black flex justify-center items-center flex-1 flex-col gap-3 ">
          <p className="text-white font-semibold text-5xl">
            For <span className="text-red-500">Users</span>
          </p>
          <Link
            to="/user-login"
            className=" text-black bg-white py-3 px-4 border-2 border-white text-xl font-medium"
          >
            Login
          </Link>
          <div className="text-white">
            Not a member yet?{" "}
            <Link to="/user-signup" className="font-semibold cursor-pointer">
              SignUp Now!
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col gap-3">
          <p className="text-black font-semibold text-5xl">
            For <span className="text-red-500">Vendors</span>
          </p>
          <button className="border-black border-2 px-4 py-3 text-black font-medium text-xl">
            Login
          </button>
          <div>
            Not a member yet?{" "}
            <span className="font-semibold cursor-pointer">SignUp Now!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
