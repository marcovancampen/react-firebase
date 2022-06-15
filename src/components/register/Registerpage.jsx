import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";
import "../../App.css";
const Registerpage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [Passwordconfirm, setPasswordconfirm] = useState("123");
  const register = async () => {
    try {
      if (Passwordconfirm == registerPassword) {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } else {
        alert("Password not match");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <input
          placeholder="Passwordconfirm..."
          onChange={(event) => {
            setPasswordconfirm(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>
    </div>
  );
};

export default Registerpage;
