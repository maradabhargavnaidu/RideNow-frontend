import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase.config";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import api from "../config/api";
import { signUpSchema } from "../validations/signup.validation";
import { useForm } from "react-hook-form";
import { useToast } from "../context/ToastProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
const UserSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const [show, setShow] = useState(true);
  const [code, setCode] = useState("");
  const { state, dispatch } = useContext(AuthContext);
  const Navigate = useNavigate();
  const { success, error } = useToast();

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
  const signUp = async (data, isCaptchVerified) => {
    if (isCaptchVerified === true) {
    } else {
      captchaVerifier();
    }

    const Verifier = window.recaptchaVerifier;
    const Phnumber = "+91" + data.number;
    signInWithPhoneNumber(auth, Phnumber, Verifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        success("OTP sent successfully");
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const sendData = async (data) => {
    try {
      const res = await api.post(`/signup`, {
        username: data.name,
        mail: data.mail,
        phonenumber: data.number,
        password: data.password,
        // verificationId: window.confirmationResult.verificationId,
      });
      console.log(res);
      if (res.status === 201) {
        Navigate("/");
        dispatch({ type: "LOGIN", payload: res.data });
        return success("Account Created Successfully!");
      }
    } catch (err) {
      console.log(err);
      // if (err.response.status === 422) {
      //   return error("Check the entered details Correctly");
      // }
      // if (err.response.status === 409) {
      //   return error("User already exists");
      // }
    }
  };
  //OTP Verification
  const verifyCode = async (data) => {
    try {
      const isConfirmed = await window.confirmationResult.confirm(code);
      if (!isConfirmed) {
        return error("Invalid OTP");
      } else {
        success("OTP Verified Successfully !");
      }
      console.log(window.confirmationResult.verificationId);
      const res = await api.post(`/signup`, {
        headers: {
          authorization: "Bearer" + window.confirmationResult.verificationId,
        },
        username: data.name,
        mail: data.mail,
        phonenumber: data.number,
        password: data.password,
      });
      if (res.status === 201) {
        Navigate("/");
        return success("Account Created Successfully!");
      }

      if (res.data) {
        Navigate("/");
      } else {
        error("Something went wrong");
      }
    } catch (err) {
      // if (err.response.status === 422) {
      //   return error("Check the entered details Correctly");
      // }
      // if (err.response.status === 409) {
      //   return error("User already exists");
      // }
      // return error(err);
      console.log(err);
      return error("Something went wrong");
    }
  };
  return (
    <>
      {show ? (
        <div className="bg-white">
          <div id="recaptcha-container"></div>
          <Link
            to="/"
            className="bg-violet-700 shadow-md shadow-white flex justify-center w-full py-3"
          >
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex justify-center items-center min-h-screen container mx-auto px-4 font-Nunito">
            <form
              onSubmit={handleSubmit(signUp)}
              className="flex flex-col gap-5 shadow-white shadow-md p-5 w-full max-w-lg bg-violet-700"
            >
              <div className="flex">
                <Link
                  to="/user-login"
                  className={
                    "flex-1 flex justify-center items-center py-2 font-bold  text-white text-lg " +
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
                type="text"
                placeholder="Name"
                {...register("name")}
                // onChange={(e) => setName(e.target.value)}
                className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100 border-2"
              />
              <span
                className={
                  "text-yellow-400 text-lg font-bold " +
                  (errors.name ? "block" : "none hidden")
                }
              >
                ⚠️ {errors.name?.message}
              </span>
              <input
                type="mail"
                placeholder="Mail Id"
                content={errors.mail?.message}
                {...register("mail")}
                // onChange={(e) => setMail(e.target.value)}
                className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100 border-2"
              />
              <span
                className={
                  "text-yellow-400 text-lg font-bold " +
                  (errors.mail ? "block" : "none hidden")
                }
              >
                ⚠️ {errors.mail?.message}
              </span>
              <input
                type="number"
                placeholder="Phone number"
                {...register("number")}
                // onChange={(e) => setNumber(e.target.value)}
                className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100 border-2"
              />
              <span
                className={
                  "text-yellow-400 text-lg font-bold " +
                  (errors.number ? "block" : "none hidden")
                }
              >
                ⚠️ {errors.number?.message}
              </span>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                // onChange={(e) => setPassword(e.target.value)}
                className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100 border-2"
              />
              <span
                className={
                  "text-yellow-400 text-lg font-bold " +
                  (errors.password ? "block" : "none hidden")
                }
              >
                ⚠️ {errors.password?.message}
              </span>
              <button className="bg-white text-violet-700 font-bold p-5 rounded-sm">
                Sign up
              </button>
            </form>
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
                // value={number}
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
