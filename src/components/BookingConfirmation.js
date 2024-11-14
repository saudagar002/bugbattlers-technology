import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearBooking } from '../redux/slices/bookingSlice';
import '../styles/BookingConfirmation.css';

const BookingConfirmation = () => {
  const dispatch = useDispatch();
  const { selectedSeats } = useSelector((state) => state.booking);
  const { start, end } = useSelector((state) => state.destination);
  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat before confirming.');
      return;
    }
    alert(`Booking confirmed! Total price: ₹${totalPrice}`);
    dispatch(clearBooking());
  };

  return (
    <div className="booking-confirmation">
      <h3>Confirm Booking</h3>
      <p>From: {start}</p>
      <p>To: {end}</p>
      <p>Selected Seats: {selectedSeats.map(seat => seat.id).join(', ')}</p>
      <p>Total Price: ₹{totalPrice}</p>
      <button onClick={handleConfirmBooking} disabled={selectedSeats.length === 0}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingConfirmation;