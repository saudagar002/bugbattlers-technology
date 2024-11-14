const express = require('express');
const Booking = require('../models/bookingModel');
const Seat = require('../models/seatModel');
const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
  const { seatNumber, type, route, price } = req.body;

  const booking = new Booking({
    seatNumber,
    type,
    route,
    price,
  });

  try {
    const newBooking = await booking.save();

    // Update the seat status to 'Booked'
    const seat = await Seat.findOne({ seatNumber });
    seat.status = 'Booked';
    await seat.save();

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
