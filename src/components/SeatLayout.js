import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSeat, removeSeat } from '../redux/slices/bookingSlice';
import '../styles/SeatLayout.css';

const SeatLayout = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state) => state.booking.selectedSeats);
  const { start, end } = useSelector((state) => state.destination);

  const [selectedSeatType, setSelectedSeatType] = useState(''); // Track selected seat type (Single/Double)

  const totalSeats = 40; // Assuming a bus with 40 seats
  const seatsPerRow = 4;

  const priceMapping = {
    'Mumbai-Pune': { single: 1000, double: 800 },
    'Pune-Solapur': { single: 1200, double: 900 },
    'Solapur-Latur': { single: 1300, double: 950 },
    'Mumbai-Latur': { single: 1500, double: 1000 },
  };

  const getPrice = (seatType) => {
    const route = `${start}-${end}`;
    return priceMapping[route]?.[seatType.toLowerCase()] || 0;
  };

  const handleSeatClick = (seatId) => {
    const isSelected = selectedSeats.some(seat => seat.id === seatId);
    if (isSelected) {
      dispatch(removeSeat(seatId)); // Remove seat if already selected
    } else {
      dispatch(addSeat({ id: seatId, type: selectedSeatType, price: getPrice(selectedSeatType) }));
    }
  };

  const renderSeats = () => {
    let seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      const isSelected = selectedSeats.some(seat => seat.id === i);

      seats.push(
        <button
          key={i}
          className={`seat ${selectedSeatType.toLowerCase()} ${isSelected ? 'selected' : ''}`}
          onClick={() => handleSeatClick(i)}
          disabled={!start || !end || !selectedSeatType} // Disable until start, end, and seat type are selected
        >
          {i}
        </button>
      );

      // Create the layout: 1-2 on the left, 3-4 on the right
      if (i % seatsPerRow === 2) {
        seats.push(<div key={`space${i}`} className="seat-space" />);
      }

      if (i % seatsPerRow === 0) seats.push(<br key={`br${i}`} />);
    }
    return seats;
  };

  return (
    <div className="seat-layout">
      <h3>Select Your Seat Type</h3>
      <div className="seat-type-selector">
        <button 
          className={`seat-type-button ${selectedSeatType === 'Single' ? 'active' : ''}`}
          onClick={() => setSelectedSeatType('Single')}
        >
          Single Seat
        </button>
        <button 
          className={`seat-type-button ${selectedSeatType === 'Double' ? 'active' : ''}`}
          onClick={() => setSelectedSeatType('Double')}
        >
          Double Seat
        </button>
      </div>

      <h3>Select Your Seats</h3>
      <div className="seat-map">{renderSeats()}</div>

      <div className="seat-info">
        <div><span className="seat-sample single"></span> Single Seat</div>
        <div><span className="seat-sample double"></span> Double Seat</div>
        <div><span className="seat-sample selected"></span> Selected Seat</div>
      </div>
    </div>
  );
};

export default SeatLayout;
