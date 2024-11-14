const express = require('express');
const Seat = require('../models/seatModel');
const router = express.Router();

// Get all seats
router.get('/', async (req, res) => {
  try {
    const seats = await Seat.find();
    res.json(seats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update seat status to Booked or Available
router.patch('/:id', async (req, res) => {
  try {
    const seat = await Seat.findById(req.params.id);
    if (seat) {
      seat.status = req.body.status; // Expect 'Booked' or 'Available'
      await seat.save();
      res.json(seat);
    } else {
      res.status(404).json({ message: 'Seat not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
