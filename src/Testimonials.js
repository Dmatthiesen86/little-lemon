import React from 'react';
import './Testimonials.css'; 
import man from './man.jpg';
import woman from './woman.jpeg';
import man2 from './man2.jpg';
import woman2 from './woman2.jpg';

const testimonialsData = [
  {
    name: "John Doe",
    image: man,
    quote: "This is an amazing experience!",
    stars: 5,
  },
  {
    name: "Jane Smith",
    image: woman,
    quote: "I love the ambiance and food!",
    stars: 5,
  },
  {
    name: "Michael Johnson",
    image: man2,
    quote: "Best restaurant in town!",
    stars: 5,
  },
  {
    name: "Emily Davis",
    image: woman2,
    quote: "A delightful dining experience!",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1 className="testimonial-title">Testimonials</h1>
      <div className="testimonial-boxes">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-box" key={index}>
            <div className="stars">{'⭐'.repeat(testimonial.stars)}</div>
            <div className="testimonial-content">
              <div className="column left-column">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
              <div className="column right-column">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

