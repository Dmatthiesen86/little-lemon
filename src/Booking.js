import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import reservationImage from './reservation.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import BookingForm from './BookingForm';

const Booking = ({ submitForm }) => {
  return (
      <div>
          <BookingForm submitForm={submitForm} />
      </div>
  );
};

export default Booking;