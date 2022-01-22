import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Nav.css';
import Signup from './components/Signup';
import Main from "./Main"
   // import FormSignup from "./components/FormSignup";
   // import useForm from "./components/useForm";
   // import SignupSuccess from "./components/SignupSuccess";
   // import validateInfo from "./components/validateInfo";

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
        <Router>
            <div className={`nav ${show && "nav_black"}`}>
                <img 
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                />
                <Link to="/Signup">
                    <img
                    className="nav_key"
                    src='https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-key-thin.png'
                    alt="Netflix Signup"
                    />
                </Link>
                <Routes>
                    <Route path="/" element={ <Main/> } exact />
                    <Route path="/signup" element={ <Signup /> } />
                </Routes>
                <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Netflix Logo"
                />
             </div>
        </Router>
    )
}

export default Nav