import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from './slices/destinationSlice';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    destination: destinationReducer,
    booking: bookingReducer,
  },
});