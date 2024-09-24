import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; 
import { Link as RouterLink } from 'react-router-dom'; 
import logo from './Logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
      </div>
      <div className="nav-container">
        <h4>Navigation</h4>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#highlights">Menu</Link></li>
          <li><RouterLink to="/reservations">Reservations</RouterLink></li>
          <li><RouterLink to="/order-online">Order Online</RouterLink></li>
          <li><RouterLink to="/login">Login</RouterLink></li>
        </ul>
      </div>
      <div className="contact-container">
        <h4>Contact Us</h4>
        <p>Address: 123 Lemon St.</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@littlelemon.com</p>
      </div>
      <div className="social-container">
        <h4>Social Media</h4>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
