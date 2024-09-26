import React from 'react';
import './About.css';
import logoImage from './Logo.png';
import topImage from './top-image.jpg';
import bottomImage from './bottom-image.jpg';

const About = () => {
    return (
        <article className="about" aria-label="About Little Lemon Restaurant">
            <div className="left-column">
                <h1 className="about-title">Little Lemon</h1>
                <h3 className="about-subtitle">Chicago</h3>
                <p className="about-text">
                    Located in the heart of Chicago, Little Lemon has been a cherished culinary gem since 1986. Founded by passionate chefs Adrian and Mario, the restaurant offers a warm atmosphere and a menu bursting with vibrant flavors, featuring everything from savory mezze to grilled meats and fresh seafood. Each dish celebrates the rich heritage of Mediterranean cuisine, making every visit a delightful experience.
                </p>
                <img src={logoImage} alt="Little Lemon Logo" className="about-logo" aria-label="Little Lemon Logo" />
            </div>
            <div className="right-column">
                <figure className="image-container">
                    <img src={topImage} alt="Dining experience at Little Lemon" className="top-image" aria-label="Top image of the dining experience" />
                    <img src={bottomImage} alt="Delicious Mediterranean dishes" className="bottom-image" aria-label="Bottom image of Mediterranean dishes" />
                </figure>
            </div>
        </article>
    );
};

export default About;