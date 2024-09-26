/* global fetchAPI */

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import reservationImage from './reservation.jpg';
import { BookingContext } from './App';
import { fetchAPI } from './api';

const BookingForm = ({ submitForm }) => {
    const { setBookingData } = useContext(BookingContext);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [occasion, setOccasion] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const navigate = useNavigate();

    const handleConfirm = (event) => {
        event.preventDefault();

        const reservationDetails = {
            name: document.querySelector('input[type="text"]').value,
            date: startDate.toLocaleDateString(),
            time: selectedTime,
            occasion: occasion,
            guests: document.querySelector('input[type="number"]').value,
        };

        setBookingData(prevData => [...prevData, reservationDetails]);

        if (submitForm(reservationDetails)) {
            navigate('/ConfirmedBooking', { state: { reservationDetails } });
        }
    };

    const occasions = ['Birthday', 'Anniversary', 'Reunion', 'Other'];

    const fetchAvailableTimes = async (date) => {
        try {
            const times = await fetchAPI(date);
            console.log("Fetched times:", times);
            setAvailableTimes(times.length > 0 ? times : []);
        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };

    useEffect(() => {
        fetchAvailableTimes(startDate);
    }, [startDate]);

    return (
        <div>
            <img src={reservationImage} alt="Reservations" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
            <section>
                <h1>Reservations</h1>
                <p>We are excited to welcome you! Please fill out the booking form below to reserve your table.</p>
            </section>

            <section className="reservations-container">
                <h3>Booking Form</h3>
                <form onSubmit={handleConfirm}>
                    <label>
                        Name:
                        <input type="text" required />
                    </label>
                    <label>
                        Date:
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                fetchAvailableTimes(date);
                            }}
                            dateFormat="MMMM d, yyyy"
                            required
                        />
                    </label>
                    <label>
                        Time:
                        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                            <option value="" disabled>Select Time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Occasion:
                        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                            <option value="" disabled>Select Occasion</option>
                            {occasions.map((occasionOption) => (
                                <option key={occasionOption} value={occasionOption}>{occasionOption}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Number of Guests:
                        <input type="number" required min="1" />
                    </label>
                    <button type="submit" className="button">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default BookingForm;
