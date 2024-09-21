// Nav.js
import React from 'react';
import logo from './Logo.png'; 
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;


