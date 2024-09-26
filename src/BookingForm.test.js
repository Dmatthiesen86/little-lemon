import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BookingContext } from './App';
import BookingForm from './BookingForm';
import { fetchAPI } from './api';
import '@testing-library/jest-dom';

jest.mock('./api', () => ({
    fetchAPI: jest.fn(() => Promise.resolve(['5:00 PM', '6:00 PM', '7:00 PM'])),
}));

describe('BookingForm', () => {
    const mockSubmitForm = jest.fn();
    const setBookingData = jest.fn();

    const renderComponent = () => {
        render(
            <MemoryRouter>
                <BookingContext.Provider value={{ setBookingData }}>
                    <BookingForm submitForm={mockSubmitForm} />
                </BookingContext.Provider>
            </MemoryRouter>
        );
    };

    beforeEach(() => {
        jest.clearAllMocks();
        renderComponent();
    });

    test('renders BookingForm correctly', () => {
        expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('valid form submission', async () => {
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '2' } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-09-30' } });
        fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '5:00 PM' } });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(mockSubmitForm).toHaveBeenCalledWith(expect.objectContaining({
            name: 'John Doe',
            guests: 2,
            occasion: 'Birthday',
            time: '5:00 PM',
        }));
        expect(setBookingData).toHaveBeenCalled();
    });

    test('invalid form submission - empty name', async () => {
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '2' } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-09-30' } });
        fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '5:00 PM' } });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument();
        expect(mockSubmitForm).not.toHaveBeenCalled();
    });

    test('invalid form submission - no guests', async () => {
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '0' } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-09-30' } });
        fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '5:00 PM' } });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(screen.getByText(/Please enter a valid number of guests/i)).toBeInTheDocument();
        expect(mockSubmitForm).not.toHaveBeenCalled();
    });

    test('invalid form submission - no time selected', async () => {
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '2' } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-09-30' } });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(await screen.findByText(/Please select a time/i)).toBeInTheDocument();
        expect(mockSubmitForm).not.toHaveBeenCalled();
    });
    });