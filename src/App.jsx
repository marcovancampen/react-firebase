import React, { useState } from "react";
import "./App.css";

import { Routes, Switch, Route, Link } from "react-router-dom";
import Registerpage from "./components/register/Registerpage";
import Loginpage from "./components/login/Loginpage";
import Twitter from "./components/twitter/Twitterpage";

function App() {
  return (
    <div className="App">
      <Link to="/Registerpage">register</Link>
      <br></br>
      <Link to="/Loginpage">login</Link>
      <br></br>
      <Link to="/Twitter">twitter</Link>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Registerpage" element={<Registerpage />} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Twitter" element={<Twitter />} />
      </Routes>
    </div>
  );
}

export default App;
