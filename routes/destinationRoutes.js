const express = require('express');
const Destination = require('../models/destinationModel');
const router = express.Router();

// Get all destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new destination
router.post('/', async (req, res) => {
  const destination = new Destination({
    start: req.body.start,
    end: req.body.end,
    singleSeatPrice: req.body.singleSeatPrice,
    doubleSeatPrice: req.body.doubleSeatPrice,
  });

  try {
    const newDestination = await destination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
