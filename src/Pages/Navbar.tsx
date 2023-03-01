import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://i.pinimg.com/474x/c2/08/b4/c208b430ae01d36ca3a3118a8e8913be.jpg"
          alt="Logo"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <button className="navbar-button">Sign In</button>
    </nav>
  );
}
export default Navbar
