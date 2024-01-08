import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserLogin from "../pages/UserLogin";
import UserSignup from "../pages/UserSignup";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { ToastProvider } from "../context/ToastProvider";

const Router = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/pick-account" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<UserLogin />} path="/user-login" />
            <Route element={<UserSignup />} path="/user-signup" />
          </Routes>
        </AuthProvider>
      </ToastProvider>

      <Toaster />
    </BrowserRouter>
  );
};

export default Router;
