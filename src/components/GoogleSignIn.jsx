import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const GoogleSignIn = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded">
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
