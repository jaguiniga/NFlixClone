import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from "./Nav";
import LoginForm from './components/LoginForm';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Practice from './components/Practice';
import Main from './components/Main';


function App() {
  return (
    <div className="app">
      

      <Nav />
      
      <Routes>
        <Route path="/" />
        <Route path="/login" element = { <LoginForm/> } />
        <Route path="/main" element = { <Main/>} />
      </Routes>
      
     

    </div>
  );
}

export default App;
