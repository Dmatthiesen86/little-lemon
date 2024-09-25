import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import logo from './Logo.png';

const Nav = () => {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" className="logo" />
            <nav>
                <ul>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#highlights">Menu</Link></li>
                    <li><RouterLink to="/Booking">Reservations</RouterLink></li>
                    <li><RouterLink to="/order-online">Order Online</RouterLink></li>
                    <li><RouterLink to="/login">Login</RouterLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;





