import { createSlice } from '@reduxjs/toolkit';

const destinationSlice = createSlice({
  name: 'destination',
  initialState: {
    start: '',
    end: '',
    price: 0,
  },
  reducers: {
    setDestinations: (state, action) => {
      state.start = action.payload.start;
      state.end = action.payload.end;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setDestinations, setPrice } = destinationSlice.actions;
export default destinationSlice.reducer;