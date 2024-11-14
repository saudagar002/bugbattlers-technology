import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/PriceDisplay.css';

const PriceDisplay = () => {
  const selectedSeats = useSelector((state) => state.booking.selectedSeats);

  // Separate the selected seats by type (Single/Double)
  const singleSeats = selectedSeats.filter(seat => seat.type === 'Single');
  const doubleSeats = selectedSeats.filter(seat => seat.type === 'Double');

  // Calculate the total price for Single and Double seats
  const singleSeatPrice = singleSeats.reduce((sum, seat) => sum + seat.price, 0);
  const doubleSeatPrice = doubleSeats.reduce((sum, seat) => sum + seat.price, 0);
  const totalPrice = singleSeatPrice + doubleSeatPrice;

  return (
    <div className="price-display">
      <h3>Booking Summary</h3>
      <p>Selected Single Seats: {singleSeats.map(seat => seat.id).join(', ') || 'None'} (₹{singleSeatPrice})</p>
      <p>Selected Double Seats: {doubleSeats.map(seat => seat.id).join(', ') || 'None'} (₹{doubleSeatPrice})</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
};

export default PriceDisplay;
