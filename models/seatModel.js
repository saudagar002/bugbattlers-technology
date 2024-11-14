const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatNumber: { type: Number, required: true },
  type: { type: String, enum: ['Single', 'Double'], required: true },
  status: { type: String, enum: ['Available', 'Booked'], default: 'Available' },
  price: { type: Number, required: true }
});

const Seat = mongoose.model('Seat', seatSchema);
module.exports = Seat;
