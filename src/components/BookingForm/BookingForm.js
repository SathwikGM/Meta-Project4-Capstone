import React from "react";
import { useState } from "react";
import './BookingForm.css'


const BookingForm = () => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [resTime, setResTime] = useState("");
  const [occasion, setOccasion] = useState("");

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
          onChange={(e) => { setDate(e.target.value); }} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={resTime} onChange={(e) => { setResTime(e.target.value) }} >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
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
        <select id="occasion" name="occasion" value={occasion} onChange={(e) => { setOccasion(e.target.value) }}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
}

export default BookingForm;