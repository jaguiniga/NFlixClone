import React from "react";
import "./App.css";
import Nav from "./Nav";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
