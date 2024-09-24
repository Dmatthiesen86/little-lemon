import React from 'react';
import { useNavigate } from 'react-router-dom';
import waiterImage from './waiter.jpg'; // Ensure the correct path to the image
import './ThankYou.css'; // Import your CSS styles if needed

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="thank-you-container">
      <img src={waiterImage} alt="Thank You" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
      
      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <h3>Your booking is confirmed.</h3>
      </div>

      <button className="button">Add to Calendar</button>

      <p>Feel free to contact us at 123-456-7890 if you have any questions about your reservations.</p>

      <button className="button" onClick={handleBackHome}>Done</button>
    </div>
  );
};

export default ThankYou;

