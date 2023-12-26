import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase.config";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import toast from "react-hot-toast";
const UserSignup = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const captchaVerifier = () => {
    if (!window.RecaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (res) => {
            signUp();
          },
          "expired-callback": () => {},
        }
      );
    }
  };
  const signUp = async () => {
    if (name === "") {
      return toast.error("Name is required", {
        position: "top-right",
        className: "font-semibold text-xl border-red-600 bg-black border-2 p-5",
        style: {
          minWidth: "250px",
          minHeight: "70px",
        },
      });
    }
    if (mail === "") {
      return toast.error("Mail Id is required", {
        position: "top-right",
        className: "font-semibold text-xl border-red-600 bg-black border-2 p-5",
        style: {
          minWidth: "250px",
          minHeight: "70px",
        },
      });
    }
    if (number === "") {
      return toast.error("PhoneNumber is required", {
        position: "top-right",
        className: "font-semibold text-xl border-red-600 bg-black border-2 p-5",
        style: {
          minWidth: "250px",
          minHeight: "70px",
        },
      });
    }
    if (password === "") {
      return toast.error("Password is required", {
        position: "top-right",
        className: "font-semibold text-xl border-red-600 bg-black border-2 p-5",
        style: {
          minWidth: "250px",
          minHeight: "70px",
        },
      });
    }
    captchaVerifier();
    const Verifier = window.recaptchaVerifier;
    const Phnumber = "+91" + number;
    signInWithPhoneNumber(auth, Phnumber, Verifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        toast.success("OTP sent successfully!", {
          position: "top-right",
          className:
            "font-semibold text-xl border-green-600 bg-black border-2 p-5",
          style: {
            minWidth: "250px",
            minHeight: "70px",
          },
        });
        Navigate("/verify-account");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div id="recaptcha-container"></div>
      <Link
        to="/"
        className="bg-black flex justify-center items-center fixed w-full py-3"
      >
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex justify-center items-center min-h-screen container mx-auto">
        <div className="flex flex-col gap-5 shadow-black shadow-md p-5 w-full max-w-lg">
          <div className="flex">
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
          </div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100 border-2"
          />
          <input
            type="mail"
            placeholder="Mail Id"
            onChange={(e) => setMail(e.target.value)}
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100 border-2"
          />
          <input
            type="number"
            placeholder="Phone number"
            onChange={(e) => setNumber(e.target.value)}
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100 border-2"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100 border-2"
          />
          <button
            className="bg-black text-white font-semibold p-3 rounded-sm"
            onClick={signUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
