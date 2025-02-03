import React, { useState } from 'react';
import './Navbar.css';
import mylogo from '../../assets/white_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav-header">
      <nav className="nav-container">
        <div className="logo-container">
          <img
            className="logo"
            src={mylogo}
            alt="Logo"
          />
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <span>JEE Main College Predictor</span>
                <ion-icon name="star" className="featured-icon"></ion-icon>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <span>Community</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <span>Feedback</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div className="nav-actions">
          <button className="login-button">
            Login/Signup
          </button>
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? "close" : "menu"}
            className="menu-toggle"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;