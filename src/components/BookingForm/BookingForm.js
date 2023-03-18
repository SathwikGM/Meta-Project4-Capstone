import React from "react";
import { useState, useEffect } from "react";
import './BookingForm.css';
import Button from '../Button/Button';

const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10);

const BookingForm = (props) => {

  const [formData, setFormData] = useState({})
  const [date, setDate] = useState(formattedDate);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");
  const { availableTimes, dispatch, submitForm } = props;
  const [resTime, setResTime] = useState([]);
  useEffect(() => {
    if (availableTimes) {
      setResTime(availableTimes.map((time) => <option key={time} value={time}>{time}</option>));
    }
  }, [availableTimes]);


  const handleDateChange = (event) => {
    const date = event.target.value
    dispatch({ type: 'UPDATE_TIMES', payload: date });
    setDate(date);
    setResTime(availableTimes.map((time) => <option key={time} value={time}>{time} </option>))

  }



  // controlling form default brhaviour
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(event)
    submitForm(formData)
  }


  return (
    <><h2 className="booking">Book Now</h2>
      <form className='booking-form' onSubmit={handleSubmit}>
        <label className="booking-label" htmlFor="res-date">Choose date</label>
        <input className="booking-input" type="date"
          id="res-date"
          name="date"
          value={date}

          onChange={handleDateChange} />
        <label className="booking-label" htmlFor="res-time">Choose time</label>
        <select className="booking-input" id="time">
          {resTime}
        </select>
        <label className="booking-label" htmlFor="guests">guests</label>
        <input className="booking-input" type="number" placeholder="guests"
          min="2" max="10"
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => { setGuests(e.target.value); }}
        />
        <label className="booking-label" htmlFor="occasion">Occasion</label>
        <select className="booking-input" id="occasion" name="occasion"
          value={occasion}
          onChange={(e) => { setOccasion(e.target.value) }}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <Button type="submit" buttonName="Make your reservation" />
      </form>
    </>
  );
}

export default BookingForm;

