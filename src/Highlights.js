import React from 'react';
import './Highlights.css'; // Import your CSS file for styling
import greekSalad from './greekSalad.jpg'; // Use relative path
import bruchetta from './bruchetta.svg'; // Use relative path
import lemonDessert from './lemonDessert.jpg'; // Use relative path

const Highlights = () => {
  return (
    <section className="highlights">
      <h1 className="title">This Week's Specials!</h1>
      <div className="columns">
        <div className="column">
          <img src={greekSalad} alt="Greek Salad" className="column-image" />
          <p className="column-title">Greek Salad</p>
          <p className="column-description">A refreshing mix of ripe tomatoes, crisp cucumbers, red onions,  olives, and creamy feta cheese, dressed with olive oil and oregano.</p>
        </div>
        <div className="column">
          <img src={bruchetta} alt="Bruchetta" className="column-image" />
          <p className="column-title">Bruchetta</p>
          <p className="column-description">Toasted rustic bread topped with a vibrant mix of chopped tomatoes, fresh basil, garlic, and a drizzle of olive oil. </p>
        </div>
        <div className="column">
          <img src={lemonDessert} alt="Lemon Dessert" className="column-image" />
          <p className="column-title">Lemon Dessert</p>
          <p className="column-description">A creamy lemon filling in a buttery crust, finished with a dusting of powdered sugar. This refreshing dessert perfectly balances sweet and tart flavors!</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;


