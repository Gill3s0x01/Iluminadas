import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import { BrowserRouter } from 'react-router-dom';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exect element={<Home />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}
