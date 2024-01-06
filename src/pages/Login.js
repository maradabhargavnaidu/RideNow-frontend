import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center flex-col md:flex-row font-CRound ">
        <div className="bg-violet-700 flex justify-center items-center flex-1 flex-col gap-3 ">
          <p className="text-white font-semibold text-6xl">
            For <span className="">Users</span>
          </p>
          <Link
            to="/user-login"
            className=" text-violet-900 bg-white py-3 px-4 text-xl font-medium"
          >
            Login
          </Link>
          <div className="text-white text-xl">
            Not a member yet?{" "}
            <Link
              to="/user-signup"
              className="font-semibold cursor-pointer border-b-violet-200 text-violet-100 text-2xl border-b-2"
            >
              SignUp Now!
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col gap-3 bg-violet-100">
          <p className="text-violet-700 font-semibold text-6xl">
            For <span className="">Vendors</span>
          </p>
          <button className=" bg-violet-700  px-4 py-3 text-white font-medium text-xl">
            Login
          </button>
          <div className="text-xl text-violet-700">
            Not a member yet?{" "}
            <span className="font-semibold cursor-pointer border-b-2 border-violet-700 text-2xl">
              SignUp Now!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
