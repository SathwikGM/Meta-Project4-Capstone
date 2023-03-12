import React from "react";
import { useState } from "react";
import './BookingForm.css'
const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10);

const BookingForm = (props) => {
  const { availableTimes, dispatch } = props;

  const [date, setDate] = useState(formattedDate);
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [resTime, setResTime] = useState(
    availableTimes.map((time) => <option key={time} value={time}>{time} </option>)
  );

  function handleDateChange(event) {
    const date = event.target.value
    dispatch({ type: 'UPDATE_TIMES', payload: date });
    setDate(date);
    setResTime(availableTimes.map((time) => <option key={time} value={time}>{time} </option>))

  }

  // controlling form default brhaviour
  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <>
      <form className='booking-form' onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date"
          id="res-date"
          name="date"
          value={date}
          onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="time">
          {resTime}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1"
          min="1" max="10"
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => { setGuests(e.target.value); }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion"
          value={occasion}
          onChange={(e) => { setOccasion(e.target.value) }}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
}

export default BookingForm;

