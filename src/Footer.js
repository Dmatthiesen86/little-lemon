import React from 'react';
import logo from './Logo.png';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <div>
        <h4>Navigation</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>Address: 123 Lemon St.</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@littlelemon.com</p>
      </div>
      <div>
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

