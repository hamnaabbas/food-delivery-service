import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Checkout from './checkout';
import AboutUs from './aboutUs';
import './Header.css';
import Deals from './Deal';

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        Food Delivery Service
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/"  className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/checkout" element={<Checkout/>}className="nav-link">Checkout</Link>
        </li>
        <li className="nav-item">
        <Link to="/deals" element={<Deals/>}className="nav-link">Deals</Link>
        </li>
        <li className="nav-item">
        <Link to="/aboutUs" element={<AboutUs/>}className="nav-link">About Us</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login">
          <button className="auth-button login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="auth-button signup">Signup</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
