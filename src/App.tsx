import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import LoginPage from './components/LoginPage/LoginPage';
import FallThroughPage from './components/FallThroughPage/FallThroughPage';
import Logout from './components/LogoutPage/Logout';

function App() {
  const [activeUser, setActiveUser] = useState("Guest");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<FrontPage/>} path="/"/>
          <Route element={<ProductDetailsPage/>} path="/product/:id"/>
          <Route element={<RegistrationPage/>} path="/register"/>
          <Route element={<LoginPage/>} path="/login"/>
          <Route element={<Logout/>} path ="/logout"/>
          <Route element={<CheckoutPage/>} path="/checkout"/>
          <Route element={<FallThroughPage/>} path="/*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
