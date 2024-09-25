import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import Booking from './Booking';
import Confirmation from './Confirmation';
import ThankYou from './ThankYou';
import './App.css';

function App() {
    const location = useLocation();

    return (
        <div className="container">
            <Nav />
            {location.pathname === '/' && <div className="hero"><Hero /></div>}
            {location.pathname === '/' && <div id="highlights" className="highlights"><Highlights /></div>}
            {location.pathname === '/' && <div id="testimonials" className="testimonials"><Testimonials /></div>}
            {location.pathname === '/' && <div id="about" className="about"><About /></div>}
            <Routes>
                <Route path="/Booking" element={<Booking />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}