import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
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
    <div className="confirmation-container">
      <h1>Please Confirm Your Order</h1>
      {reservationDetails && (
        <table>
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
      <p>Please complete the contact form to complete your reservation.</p>

      <form className="contact-form" onSubmit={handleConfirm}>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Phone #:
          <input type="text" required />
        </label>
        <label>
          Email Address:
          <input type="email" required />
        </label>
        <p>Additional Instructions:</p>
        <textarea rows="4" placeholder="Enter any additional instructions here..."></textarea>
        <p>Click to confirm reservation</p>
        <button type="submit" className="button">Confirm</button>
      </form>
    </div>
  );
};

export default Confirmation;
