import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Thank You!</h1>
      {/* Thank you message here */}
      <button onClick={handleBackHome}>Back to Home</button>
    </div>
  );
};

export default ThankYou;
