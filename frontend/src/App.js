import React from "react";
import {Navigate, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPwd from "./ForgotPwd";
import RegisterForm from "./RegisterForm";
import Home from "./Home";
import RefreshHandler from "./RefreshHandler";
import { useState } from 'react';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute =({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
  return (
    <div>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
      <Route path='/*' element={<Navigate to="/login" />} />

      </Routes>
    </div>
  );
};

export default App;
