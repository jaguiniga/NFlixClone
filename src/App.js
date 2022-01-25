import React from "react";
import "./App.css";
import Nav from "./Nav";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
