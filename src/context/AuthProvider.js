import { createContext } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import api from "../config/api";

const initialState = {
  isAuthenticated: false,
  token: "",
  username: "",
  mail: "",
  phonenumber: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.user.token);
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.user.token,
        username: action.payload.user.username,
        mail: action.payload.user.mail,
        phonenumber: action.payload.user.phonenumber,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: "",
        username: "",
        mail: "",
        phonenumber: "",
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const Navigate = useNavigate();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // CHECKING THE SESSION
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const allow = async () => {
        const user = await api.get(`/getprofile`, {
          headers: {
            authorization: token,
          },
        });
        console.log(user.data);
        if (user) {
          console.log(user);
          dispatch({ type: "LOGIN", payload: user.data });
          Navigate("/");
        } else {
          dispatch({ type: "LOGOUT" });
        }
      };
      allow();
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
