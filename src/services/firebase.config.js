import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALOmLdhADnzGs9IqVclgh21H-7sjuKs84",
  authDomain: "bikerentals-9c0f1.firebaseapp.com",
  projectId: "bikerentals-9c0f1",
  storageBucket: "bikerentals-9c0f1.appspot.com",
  messagingSenderId: "780605995198",
  appId: "1:780605995198:web:f13af7746fff3e137f46ef",
  measurementId: "G-W4DJTB41VR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
