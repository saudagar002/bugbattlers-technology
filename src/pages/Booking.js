import React from 'react';
import DestinationSelector from '../components/DestinationSelector';
import SeatLayout from '../components/SeatLayout';
import PriceDisplay from '../components/PriceDisplay';
import BookingConfirmation from '../components/BookingConfirmation';

import '../styles/Booking.css';



function Booking() {
  return (
    <div className="booking">
      <h2>Book Your Ticket</h2>
      <DestinationSelector />
      <SeatLayout />
      <PriceDisplay />
      <BookingConfirmation />
    </div>
  );
}

export default Booking;