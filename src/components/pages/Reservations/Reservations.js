import { useReducer } from "react";
import BookingForm from "../../BookingForm/BookingForm";

const updateTimes = (date, action) => {
  if (action.type === "UPDATE_TIME") {
    const times = [
      '9:00am',
      '10:00am',
      '11:00am',
      '12:00pm',
      '1:00pm',
      '2:00pm',
      '3:00pm',
      '4:00pm',
      '5:00pm'
    ];
    return { ...date, date: action.payload, times: times };
  }
  return date;

}

function initializeTimes() {
  const times = [
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
    '5:00pm'
  ];
  return times;
}


const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, 0, initializeTimes);



  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>);
}

export default Reservations;