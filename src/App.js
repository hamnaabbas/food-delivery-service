import React from 'react';
import { Route, Routes } from 'react-router-dom'; // ⛔ Remove BrowserRouter from here
import R from './components/route.js';
import Login from './components/Login';
import Signup from './components/SignUp';
import Checkout from './components/checkout.js';
import Layout from './Layout.js';
import './App.css';
import AboutUs from './components/aboutUs.js';
import Deals from './components/Deal.js';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<R />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </Layout>
  );
};

export default App;
