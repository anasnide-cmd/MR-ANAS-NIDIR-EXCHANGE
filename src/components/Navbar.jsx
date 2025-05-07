import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase/config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Navbar = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff" }}>
      <h1>MANEX</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </nav>
  );
};

export default Navbar;
