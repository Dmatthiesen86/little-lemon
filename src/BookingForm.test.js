import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Booking from './Booking';
import '@testing-library/jest-dom';


test('renders Booking Form heading', () => {
    render(
        <MemoryRouter initialEntries={['/Booking']}>
            <Booking />
        </MemoryRouter>
    );

    const headingElement = screen.getByText("Booking Form");
    expect(headingElement).toBeInTheDocument();
});
