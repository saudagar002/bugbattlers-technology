const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  seatNumber: { type: Number, required: true },
  type: { type: String, enum: ['Single', 'Double'], required: true },
  route: {
    start: { type: String, required: true },
    end: { type: String, required: true }
  },
  price: { type: Number, required: true },
  bookingTime: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
