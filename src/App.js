import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import Reservations from './Reservations';
import Confirmation from './Confirmation';
import ThankYou from './ThankYou';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
          </>
        } />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
