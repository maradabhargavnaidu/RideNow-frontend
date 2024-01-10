import React, { lazy, Suspense } from "react";
import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import UserLogin from "../pages/UserLogin";
// import UserSignup from "../pages/UserSignup";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { ToastProvider } from "../context/ToastProvider";
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const UserLogin = lazy(() => import("../pages/UserLogin"));
const UserSignup = lazy(() => import("../pages/UserSignup"));
const Router = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Login />} path="/pick-account" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<UserLogin />} path="/user-login" />
              <Route element={<UserSignup />} path="/user-signup" />
            </Routes>
          </Suspense>
        </AuthProvider>
      </ToastProvider>

      <Toaster />
    </BrowserRouter>
  );
};

export default Router;
