import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDestinations } from '../redux/slices/destinationSlice';
import { clearBooking } from '../redux/slices/bookingSlice';
import '../styles/DestinationSelector.css';

const destinations = ['Mumbai', 'Pune', 'Solapur', 'Latur'];

function DestinationSelector() {
  const dispatch = useDispatch();
  const { start, end } = useSelector((state) => state.destination);

  const handleDestinationChange = (type, value) => {
    dispatch(setDestinations({ ...{ start, end }, [type]: value }));
    dispatch(clearBooking()); // Clear selected seats when destination changes
  };

  return (
    <div className="destination-selector">
      <h3>Select Your Route</h3>
      <div className="select-container">
        <label htmlFor="start-destination">From:</label>
        <select
          id="start-destination"
          value={start}
          onChange={(e) => handleDestinationChange('start', e.target.value)}
        >
          <option value="">Select start destination</option>
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
      <div className="select-container">
        <label htmlFor="end-destination">To:</label>
        <select
          id="end-destination"
          value={end}
          onChange={(e) => handleDestinationChange('end', e.target.value)}
        >
          <option value="">Select end destination</option>
          {destinations.filter(dest => dest !== start).map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DestinationSelector;
