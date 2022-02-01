import React from "react";
import "./FormSignup.css";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form class="form" onSubmit={handleSubmit}>
        <h1>Netflix Clone Account Sign-up</h1>
        <div className="form-inputs">
          <label for="username" class="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            class="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div class="form-inputs">
          <label for="email" class="form-label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            class="form-input"
            placeholder="Enter your E-mail address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            class="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div class="form-inputs">
          <label for="password2" class="form-label">
            Password Confirmation
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            class="form-input"
            placeholder="Please confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button class="form-input-btn" type="submit">
          Sign up
        </button>
        <span class="form-input-login">
          Already have an account? Login
          <a href="http://localhost:3000/login"> here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
