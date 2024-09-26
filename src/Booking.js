import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import BookingForm from './BookingForm';
import './Booking.css';

const Booking = ({ submitForm }) => {
  return (
      <main aria-label="Booking form section">
          <BookingForm submitForm={submitForm} />
      </main>
  );
};

export default Booking;