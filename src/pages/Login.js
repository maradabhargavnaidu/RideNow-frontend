import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center flex-col md:flex-row font-CRound ">
        <div className="bg-violet-700 flex justify-center items-center flex-1 flex-col gap-3 ">
          <p className="text-white font-semibold md:text-6xl text-4xl">
            For <span className="">Users</span>
          </p>
          <Link
            to="/user-login"
            className=" text-violet-900 bg-white py-3 px-4 md:text-xl text-lg font-medium"
          >
            Login
          </Link>
          <div className="text-white md:text-xl text-lg">
            Not a member yet?{" "}
            <Link
              to="/user-signup"
              className="font-semibold cursor-pointer border-b-violet-200 text-violet-100 text-lg md:text-2xl border-b-2"
            >
              SignUp Now!
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col gap-3 bg-violet-100">
          <p className="text-violet-700 font-semibold md:text-6xl text-4xl">
            For <span className="">Vendors</span>
          </p>
          <button className=" bg-violet-700  px-4 py-3 text-white font-medium md:text-xl text-lg">
            Login
          </button>
          <div className="text-lg md:text-xl text-violet-700">
            Not a member yet?{" "}
            <span className="font-semibold cursor-pointer border-b-2 border-violet-700 md:text-2xl text-lg">
              SignUp Now!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
