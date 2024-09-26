import React from 'react';
import { useNavigate } from 'react-router-dom';
import waiterImage from './waiter.jpg';
import './ThankYou.css';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="thank-you-container" role="main">
      <img
        src={waiterImage}
        alt="Thank You"
        style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
        aria-hidden="true"
      />

      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <h3>Your booking is confirmed.</h3>
      </div>

      <button className="button" aria-label="Add your booking to calendar">Add to Calendar</button>

      <p>Feel free to contact us at <strong>123-456-7890</strong> if you have any questions about your reservations.</p>

      <button className="button" onClick={handleBackHome} aria-label="Return to home page">Done</button>
    </div>
  );
};

export default ThankYou;