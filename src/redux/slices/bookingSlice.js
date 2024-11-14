import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    addSeat: (state, action) => {
      state.selectedSeats.push(action.payload);
    },
    removeSeat: (state, action) => {
      state.selectedSeats = state.selectedSeats.filter(seat => seat.id !== action.payload);
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    clearBooking: (state) => {
      state.selectedSeats = [];
      state.totalPrice = 0;
    },
  },
});

export const { addSeat, removeSeat, setTotalPrice, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;