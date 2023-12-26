import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Verifyacc = () => {
  const [code, setCode] = useState("");
  const verifyCode = () => {
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // // User signed in successfully.
        const user = result.user;
        // // ...
        window.alert("User LoggedIn");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log(error);
      });
  };
  return (
    <>
      <Link
        to="/"
        className="bg-black flex justify-center items-center fixed w-full py-3"
      >
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex justify-center items-center min-h-screen container mx-auto">
        <div className="flex flex-col gap-5 shadow-black shadow-md p-5 w-full max-w-lg">
          <div className="flex items-center justify-center">
            <p className="font-semibold text-lg">Account Verification</p>
          </div>
          {/* <div className="flex">
            <Link
              to="/user-login"
              className={
                "flex-1 flex justify-center items-center py-2 font-semibold " +
                (window.location.pathname === "/user-login"
                  ? "border-black border-b-2"
                  : "")
              }
            >
              Login
            </Link>
            <Link
              to="/user-signup"
              className={
                "flex-1 flex justify-center items-center py-2 font-semibold " +
                (window.location.pathname === "/user-signup"
                  ? "border-black border-b-2"
                  : "")
              }
            >
              SignUp
            </Link>
          </div> */}
          <input
            type="number"
            placeholder="Phone number"
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100"
          />
          <input
            type="text"
            placeholder="Enter OTP"
            onChange={(e) => setCode(e.target.value)}
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100"
          />
          <button
            className="bg-black text-white font-semibold p-3 rounded-sm"
            onClick={verifyCode}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Verifyacc;
