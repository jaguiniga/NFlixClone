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
    <div className="login-form">
      <form class="form" onSubmit={submitHandler}>
        <h1>Netflix Clone Account Login</h1>
        {/* ERROR */}
        <div className="form-text ">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            class="form-input"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.username}
          />
        </div>

        <div className="form-text ">
          <label for="email" class="form-label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            class="form-input"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-text ">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            class="form-input"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <input className="nav-button1" type="submit" value="Log me in!" />
      </form>
    </div>
  );
}

export default LoginForm;
