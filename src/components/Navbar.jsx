// src/components/Navbar.jsx
import React from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, getAuth } from "firebase/auth";
import { app } from "../firebase/config";
import { useAuth } from "../context/AuthContext";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Navbar = () => {
  const { user } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff", display: "flex", justifyContent: "space-between" }}>
      <h1>MANEX</h1>
      {user ? (
        <div>
          <span style={{ marginRight: "1rem" }}>Hello, {user.displayName}</span>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </nav>
  );
};

export default Navbar;
