import { useReducer, useEffect } from "react";
import BookingForm from "../../BookingForm/BookingForm";
import { fetchAPI } from "../../../bookingAPI";


const updateTimes = (date, action) => {
  if (action.type === "UPDATE_TIME") {
    return fetchAPI(date)
  }
  return date;

}



function initializeTimes(date) {
  const times = fetchAPI(new Date())
  return times;
}

console.log(fetchAPI)
const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, 0, initializeTimes);



  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>);
}

export default Reservations;