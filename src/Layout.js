// Layout.js
import React from 'react';
import Header from './components/header'; // Create and import your Header component
import Footer from './components/Footer'; // Create and import your Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
