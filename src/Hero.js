import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleReservations = () => {
    navigate('/reservations');
  };

  return (
    <div className="hero">
      <h1>Welcome to Little Lemon!</h1>
      <p>Experience the best Mediterranean cuisine.</p>
      <button onClick={handleReservations}>Make a Reservation</button>
    </div>
  );
};

export default Hero;

