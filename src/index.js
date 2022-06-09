import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import AddProfile from './AddProfile';
import ErrorComp from './ErrorComp';
import './App.css';
import Header from './Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/" element={<AddProfile />} />
      <Route path="*" element={<ErrorComp />} />
    </Routes>
  </BrowserRouter>
);


