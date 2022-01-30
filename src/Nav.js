import React, { useState, useEffect } from "react";
import "./Nav.css";
// import LoginForm from "./components/LoginForm";
import { NavLink } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <NavLink to="/main">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </NavLink>

      <NavLink to="/login">
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Logo"
        />
      </NavLink>

      <NavLink to="/signup">
        <button className="nav_button">Signup</button>
      </NavLink>

      {/* <NavLink to="/main">
        <button className="nav_button">Main</button>
      </NavLink> */}
    </div>
  );
}

export default Nav;
