import { useReducer } from "react";
import BookingForm from "../../BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../../../bookingAPI";
import { useNavigate } from "react-router-dom";


// Update time function to provide to the useReducer hook
const updateTimes = (date, action) => {
  if (action.type === "UPDATE_TIME") {
    return fetchAPI(date)
  }
  return date;
}

// Initializing the time to provide to the useReducer hook
const initializeTimes = (date) => {
  const times = fetchAPI(new Date())
  return times;
}


const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const navigate = useNavigate();
  // submitting the form data
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmation");
    }
  }

  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </>);
}

export default Reservations;