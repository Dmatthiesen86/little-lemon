// Nav.js
import React from 'react';
import logo from './Logo.png'; 
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
             <img src={logo} alt="Little Lemon Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;



