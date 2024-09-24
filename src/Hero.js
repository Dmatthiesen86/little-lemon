import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fonts.css';
import restaurantFood from './restaurantfood.jpg'; // Adjust the path if the image is in a different folder

const Hero = () => {
  const navigate = useNavigate();

  const handleReservations = () => {
    navigate('/reservations');
  };

  return (
    <div className="hero">
      <h1 className="title">Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
      </p>
      
      <img src={restaurantFood} alt="Delicious food from Little Lemon" style={{ width: '100%', height: 'auto' }} /> {/* Adjust styling as needed */}
      
      <button className="button" onClick={handleReservations}>Make a Reservation</button>
    </div>
  );
};

export default Hero;



