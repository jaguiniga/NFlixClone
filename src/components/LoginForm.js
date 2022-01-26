import React, { useState } from "react";
// import { NavLink, useNavigate  } from "react-router-dom";

import "./LoginForm.css";

function LoginForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    console.log("Logout");
  };

  return (
    <div className="login_form">
      <form onSubmit={submitHandler}>
        <div>
          <h1 className="form_text">Login</h1>
          {/* ERROR */}
          <div className="form_text ">
            <label htmlFor="name"> Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>

          <div className="form_text ">
            <label htmlFor="email"> Email: </label>
            <input
              type="password"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>

          <div className="form_text ">
            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>

          <input className="nav_button1" type="submit" value="LOGIN" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
