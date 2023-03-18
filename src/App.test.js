import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

// Form validation

describe('BookingForm', () => {
  test('displays the number of guests', () => {
    render(<BookingForm />);
    const input = screen.getByLabelText("guests");
    fireEvent.change(input, { target: { value: '4' } });
    expect(input.value).toBe('4');
  });
});