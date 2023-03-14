import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

// Form validation

// describe("Reservation Form", () => {
//   test("fenfn", () => {
//     render(<BookingForm />);
//     const guests = 2;
//     const handleSubmit = jest.fn();
//     const numberOfGuest = screen.getAllByLabelText(/Number of guests:/)
//     fireEvent.change(numberOfGuest, { target: { value: guests } });

//     const submitButton = screen.getByRole("button");
//     fireEvent.click(submitButton);

//     expect(handleSubmit).toHaveBeenCalledWith({
//       guests,
//     });
//   });
// });