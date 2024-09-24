import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fonts.css';
import restaurantFood from './restaurantfood.jpg'; 
import './hero.css'

const Hero = () => {
  const navigate = useNavigate();

  const handleReservations = () => {
    navigate('/reservations');
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="colorTitle">Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="regular">
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
          </p>
          <button className="hero-button" onClick={handleReservations}>Make a Reservation</button>
        </div>
        <img src={restaurantFood} alt="Delicious food from Little Lemon" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
