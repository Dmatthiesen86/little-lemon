/* global fetchAPI */

import React, { useState, useContext, useEffect } from 'react';
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
    const [name, setName] = useState('');
    const [guests, setGuests] = useState(1);
    const [formValid, setFormValid] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        date: '',
        time: '',
        occasion: '',
        guests: '',
    });
    const navigate = useNavigate();
    const occasions = ['Birthday', 'Anniversary', 'Reunion', 'Other'];

    const validateForm = () => {
        const newErrors = {};
        if (name.trim() === '') newErrors.name = "Please enter your name.";
        if (selectedTime === '') newErrors.time = "Please select a time.";
        if (occasion === '') newErrors.occasion = "Please select an occasion.";
        if (guests < 1) newErrors.guests = "Please enter a valid number of guests (at least 1).";

        setErrors(newErrors);
        setFormValid(Object.keys(newErrors).length === 0);
    };

    const fetchAvailableTimes = async (date) => {
        try {
            const times = await fetchAPI(date);
            setAvailableTimes(times || []);
            setSelectedTime('');
        } catch (error) {
            console.error("Failed to fetch available times:", error);
            setAvailableTimes([]);
        }
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        validateForm();

        if (!formValid) {
            return;
        }

        const reservationDetails = {
            name,
            date: startDate.toLocaleDateString(),
            time: selectedTime,
            occasion,
            guests,
        };

        setBookingData((prevData) => [...prevData, reservationDetails]);

        if (submitForm(reservationDetails)) {
            navigate('/ConfirmedBooking', { state: { reservationDetails } });
        }
    };

    useEffect(() => {
        fetchAvailableTimes(startDate);
    }, [startDate]);

    return (
        <main>
            <img src={reservationImage} alt="Reservations" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
            <section>
                <h1>Reservations</h1>
                <p>We are excited to welcome you! Please fill out the booking form below to reserve your table.</p>
            </section>
            <form onSubmit={handleConfirm}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            validateForm();
                        }}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            validateForm();
                        }}
                        dateFormat="MMMM d, yyyy"
                        id="date"
                        required
                    />
                    {errors.date && <span className="error">{errors.date}</span>}
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <select
                        id="time"
                        value={selectedTime}
                        onChange={(e) => {
                            setSelectedTime(e.target.value);
                            validateForm();
                        }}
                        required
                    >
                        <option value="" disabled>Select Time</option>
                        {availableTimes.length > 0 ? (
                            availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))
                        ) : (
                            <option value="" disabled>No available times</option>
                        )}
                    </select>
                    {errors.time && <span className="error">{errors.time}</span>}
                </div>
                <div>
                    <label htmlFor="occasion">Occasion:</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => {
                            setOccasion(e.target.value);
                            validateForm();
                        }}
                        required
                    >
                        <option value="" disabled>Select Occasion</option>
                        {occasions.map((occasionOption) => (
                            <option key={occasionOption} value={occasionOption}>{occasionOption}</option>
                        ))}
                    </select>
                    {errors.occasion && <span className="error">{errors.occasion}</span>}
                </div>
                <div>
                    <label htmlFor="guests">Number of Guests:</label>
                    <input
                        type="number"
                        id="guests"
                        min="1"
                        value={guests}
                        onChange={(e) => {
                            setGuests(Number(e.target.value));
                            validateForm();
                        }}
                        required
                    />
                    {errors.guests && <span className="error">{errors.guests}</span>}
                </div>
                <button type="submit" className="button" aria-label="Submit Form" disabled={!formValid}>Submit</button>
            </form>
        </main>
    );
};

export default BookingForm;