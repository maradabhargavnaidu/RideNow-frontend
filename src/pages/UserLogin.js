import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validations/login.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../config/api";
import { useToast } from "../context/ToastProvider";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const Navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const { success, error } = useToast();
  const Login = async (data) => {
    console.log(data);
    try {
      const res = await api.post(`/login`, {
        phonenumber: data.number,
        password: data.password,
      });
      if (res.status === 201) {
        dispatch({ type: "LOGIN", payload: res.data });
        Navigate("/");
        return success("Successfully Logedin");
      }
    } catch (err) {
      // if (err.response.status === 422) {
      //   return error("Check the entered details Correctly");
      // }
      // if (err.response.status === 409) {
      //   return error("User already exists");
      // }
      console.log(error);
    }
  };
  return (
    <div className="bg-white">
      <Link
        to="/"
        className="bg-violet-700 shadow-md shadow-white flex justify-center items-center fixed w-full py-3"
      >
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex justify-center items-center min-h-screen container mx-auto px-4 font-Nunito">
        <form
          onSubmit={handleSubmit(Login)}
          className="flex flex-col gap-5 shadow-white shadow-md p-5 w-full max-w-lg bg-violet-700"
        >
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
            {...register("number")}
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="h-16 p-2 text-gray-900 accent-transparent bg-gray-100"
          />
          <button className="bg-white text-violet-700 font-bold p-5 rounded-sm">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
