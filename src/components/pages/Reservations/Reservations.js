import { useReducer } from "react";
import BookingForm from "../../common/BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../../../bookingAPI";
import { useNavigate } from "react-router-dom";
import './Reservation.css'

const updateTimes = async (date, action) => {
	switch (action.type) {
		case 'UPDATE_TIMES':
			const newTimes = await fetchAPI(action.payload.date);
			return newTimes;
		default:
			return date;
	}
}

const Reservations = () => {
	const initializeTimes = fetchAPI(new Date());
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
	const navigate = useNavigate();
	const submitForm = (formData) => {
		if (submitAPI(formData)) {
			navigate("/confirmation");
		}
	}
	return (
		<div className="reservation-container">
			<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
		</div>);
}

export default Reservations;