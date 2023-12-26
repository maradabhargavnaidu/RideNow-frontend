import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center flex-col md:flex-row">
        <div className="bg-black flex justify-center items-center flex-1 flex-col gap-3 ">
          <p className="text-white font-semibold text-5xl">For Vendors</p>
          <button className=" text-black bg-white py-3 px-4 border-2 border-white text-xl font-medium">
            Login
          </button>
          <div className="text-white">
            Not a member yet?{" "}
            <span className="font-semibold cursor-pointer">SignUp Now!</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col gap-3">
          <p className="text-black font-semibold text-5xl">For Users</p>
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
