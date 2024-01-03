import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <div className='logo-search'>
        <img className="grocery-logo" src="https://cdn3.vectorstock.com/i/1000x1000/98/22/logo-for-grocery-store-vector-21609822.jpg" alt="Grocery logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
