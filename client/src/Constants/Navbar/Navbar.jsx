import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css"

const NavBar = () => {
  return (
    <div id="navbar-main" className="flex-row">
      <Link to={"/"}>
        <div className="logo-box flex-row">
          <img
            className="logo"
            src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png"
            alt="logo"
          />
          <p>CodeLab</p>
        </div>
      </Link>
      <div className="nav-options">
        <Link to={"/problemset/all"}>Problems</Link>
      </div>
      <div className="nav-options">
        <Link to={"/signup"}>Signup</Link>
      </div>
      <div className="nav-options">
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
