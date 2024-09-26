import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Confirmation.css';

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationDetails } = location.state || {};

  const handleBack = () => {
    navigate('/Booking');
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div className="confirmation-container" role="main">
      <h1>Confirm your Booking!</h1>
      {reservationDetails && (
        <table aria-label="Reservation Details">
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>{reservationDetails.name}</td>
            </tr>
            <tr>
              <td><strong>Date:</strong></td>
              <td>{reservationDetails.date}</td>
            </tr>
            <tr>
              <td><strong>Time:</strong></td>
              <td>{reservationDetails.time}</td>
            </tr>
            <tr>
              <td><strong>Occasion:</strong></td>
              <td>{reservationDetails.occasion}</td>
            </tr>
            <tr>
              <td><strong>Number of Guests:</strong></td>
              <td>{reservationDetails.guests}</td>
            </tr>
          </tbody>
        </table>
      )}
      <p className="something-not-right">Something not right?</p>
      <button className="button" onClick={handleBack}>Back to Reservations</button>
      <p>Please complete the contact form to finalize your reservation.</p>

      <form className="contact-form" onSubmit={handleConfirm} aria-labelledby="contact-form">
        <h3 id="contact-form">Contact Information</h3>
        <label htmlFor="contact-name">
          Name:
          <input type="text" id="contact-name" required />
        </label>
        <label htmlFor="contact-phone">
          Phone #:
          <input type="tel" id="contact-phone" required />
        </label>
        <label htmlFor="contact-email">
          Email Address:
          <input type="email" id="contact-email" required />
        </label>
        <p>Additional Instructions:</p>
        <textarea rows="4" placeholder="Enter any additional instructions here..."></textarea>
        <p>Click to confirm reservation</p>
        <button type="submit" className="button">Confirm</button>
      </form>
    </div>
  );
};

export default ConfirmedBooking;