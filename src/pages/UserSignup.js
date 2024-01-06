import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase.config";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import toast from "react-hot-toast";
import axios from "axios";

const UserSignup = () => {
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const Navigate = useNavigate();
  //Captch Verification
  const captchaVerifier = () => {
    console.log("captch verifier called");
    if (!window.RecaptchaVerifier) {
      console.log("if called in captcha");
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (res) => {
            signUp(true);
          },
          "expired-callback": () => {
            captchaVerifier();
          },
        }
      );
    }
  };

  //To Register the user
  const signUp = async (isCaptchVerified) => {
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
    if (isCaptchVerified === true) {
    } else {
      captchaVerifier();
    }

    const Verifier = window.recaptchaVerifier;
    const Phnumber = "+91" + number;
    signInWithPhoneNumber(auth, Phnumber, Verifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        toast.success("OTP sent successfully!", {
          position: "top-right",
          className:
            "font-semibold text-xl border-green-600 bg-black border-2 p-5",
          style: {
            minWidth: "250px",
            minHeight: "70px",
          },
        });
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //OTP Verification
  const verifyCode = async () => {
    try {
      const isConfirmed = await window.confirmationResult.confirm(code);
      if (!isConfirmed) {
        console.log("Invalid otp");
        return;
      }
      const res = await axios.post(
        "https://ridenow-backend.onrender.com/signup",
        {
          username: name,
          mail,
          phonenumber: number,
          password,
        }
      );
      if (res.data) {
        Navigate("/");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
    // window.confirmationResult
    //   .confirm(code)
    //   .then(async (result) => {
    //     // const user = result.user;
    //     toast.success("PhoneNumber verified Successfully!");
    //     const res = await axios
    //       .post(`http://localhost:3500/signup`, {
    //         username: name,
    //         mail,
    //         phonenumber: number,
    //         password,
    //       })
    //       .then((res) => {
    //         console.log(res);
    //         Navigate("/");
    //       })
    //       .catch((err) => console.log(err));
    //   })
    //   .catch((error) => {
    //     // User couldn't sign in (bad verification code?)
    //     console.log(error);
    //   });
  };
  return (
    <>
      {show ? (
        <div className="bg-white">
          <div id="recaptcha-container"></div>
          <Link
            to="/"
            className="bg-violet-700 shadow-md shadow-white flex justify-center items-center fixed w-full py-3"
          >
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex justify-center items-center min-h-screen container mx-auto px-4 font-CRound">
            <div className="flex flex-col gap-5 shadow-white shadow-md p-5 w-full max-w-lg bg-violet-700">
              <div className="flex">
                <Link
                  to="/user-login"
                  className={
                    "flex-1 flex justify-center items-center py-2 font-semibold  text-white " +
                    (window.location.pathname === "/user-login"
                      ? "border-white text-white font-bold border-b-2"
                      : "")
                  }
                >
                  Login
                </Link>
                <Link
                  to="/user-signup"
                  className={
                    "flex-1 flex justify-center items-center py-2 font-semibold text-white " +
                    (window.location.pathname === "/user-signup"
                      ? "border-white text-white border-b-2"
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
                className="bg-white text-violet-700 font-semibold p-5 rounded-sm"
                onClick={signUp}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Link
            to="/"
            className="bg-violet-700 flex justify-center items-center fixed w-full py-3"
          >
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex justify-center items-center min-h-screen container mx-auto font-CRound">
            <div className="flex flex-col gap-5 shadow-black shadow-md p-5 w-full max-w-lg bg-violet-700">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-lg text-white">
                  Account Verification
                </p>
              </div>
              <input
                type="text"
                placeholder="Phone number"
                value={number}
                className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100"
              />
              <input
                type="text"
                placeholder="Enter OTP"
                onChange={(e) => setCode(e.target.value)}
                className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100"
              />
              <button
                className="bg-white text-violet-700 font-semibold p-5 rounded-sm"
                onClick={verifyCode}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserSignup;
