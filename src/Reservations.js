import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import reservationImage from './reservation.jpg'; // Correct path to the image
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles for the date picker

const Reservations = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [occasion, setOccasion] = useState(''); // State for occasion
  const navigate = useNavigate();

  const handleConfirm = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate('/confirmation');
  };

  const times = [
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', 
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  const occasions = [
    'Birthday', 'Anniversary', 'Reunion', 'Other'
  ];

  return (
    <div>           
      <img src={reservationImage} alt="Reservations" style={{ width: '100%', height: 'auto' }} />
      
      <section>
        <h1>Reservations</h1>
        <p>We are excited to welcome you! Please fill out the booking form below to reserve your table.</p>
      </section>

      <section>
        <h2>Booking Form</h2>
        <form onSubmit={handleConfirm}>
          <label>
            Name:
            <input type="text" required />
          </label>
          <br />
          <label>
            Date:
            <DatePicker 
              selected={startDate} 
              onChange={(date) => setStartDate(date)} 
              dateFormat="MMMM d, yyyy"
              required
            />
          </label>
          <br />
          <label>
            Time:
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
              <option value="" disabled>Select Time</option>
              {times.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Occasion:
            <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
              <option value="" disabled>Select Occasion</option>
              {occasions.map((occasionOption) => (
                <option key={occasionOption} value={occasionOption}>{occasionOption}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Number of Guests:
            <input type="number" required min="1" />
          </label>
          <br />
          <button type="submit" className="button">Confirm</button>
        </form>
      </section>
    </div>
  );
};

export default Reservations;
