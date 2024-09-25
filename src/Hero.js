import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fonts.css';
import restaurantFood from './restaurantfood.jpg';
import './hero.css'

const Hero = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/Booking');
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="colorTitle">Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="regular">
          Little Lemon is a charming neighborhood bistro that offers simple yet delicious food and classic cocktails in a warm, casual setting. The menu emphasizes locally sourced ingredients, featuring daily specials that highlight seasonal produce. With its inviting atmosphere, Little Lemon is perfect for intimate dinners or lively gatherings, making every visit a delightful experience filled with comfort and flavor.
          </p>
          <button className="hero-button" onClick={handleBooking}>Make a Reservation</button>
        </div>
        <img src={restaurantFood} alt="Delicious food from Little Lemon" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
