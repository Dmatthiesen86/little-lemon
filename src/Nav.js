import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import logo from './Logo.png';

const Nav = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" className="logo" />
            <nav className={isNavVisible ? 'active' : ''}>
                <button onClick={toggleNav}>
                    {isNavVisible ? 'Close' : 'Menu'}
                </button>
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






