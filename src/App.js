import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';
import ThankYou from './ThankYou';
import './App.css';

const submitAPI = (formData) => {
    console.log("Submitting:", formData);
    return true;
};

export const BookingContext = createContext();

function App() {
    const [bookingData, setBookingData] = useState([]);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const location = useLocation();

    const submitForm = (formData) => {
        return submitAPI(formData);
    };

    const handleScroll = () => {
        console.log('Scroll position:', window.scrollY);
        if (window.scrollY > 300) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <BookingContext.Provider value={{ bookingData, setBookingData }}>
            <div className="container">
                <header>
                    <Nav />
                </header>
                <main aria-label="Main content">
                    {location.pathname === '/' && <div className="hero"><Hero /></div>}
                    {location.pathname === '/' && <div id="highlights" className="highlights"><Highlights /></div>}
                    {location.pathname === '/' && <div id="testimonials" className="testimonials"><Testimonials /></div>}
                    {location.pathname === '/' && <div id="about" className="about"><About /></div>}
                    <Routes>
                        <Route path="/Booking" element={<Booking submitForm={submitForm} />} />
                        <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
                        <Route path="/thank-you" element={<ThankYou />} />
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
            {showScrollToTop && (
                <button 
                    className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`} 
                    onClick={scrollToTop} 
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </BookingContext.Provider>
    );
}

export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}