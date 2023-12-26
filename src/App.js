import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Verifyacc from "./pages/Verifyacc";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/pick-account" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<UserLogin />} path="/user-login" />
        <Route element={<UserSignup />} path="/user-signup" />
        <Route element={<Verifyacc />} path="/verify-account" />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
