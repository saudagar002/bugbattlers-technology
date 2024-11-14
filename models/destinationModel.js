const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  start: { type: String, required: true },
  end: { type: String, required: true },
  singleSeatPrice: { type: Number, required: true },
  doubleSeatPrice: { type: Number, required: true },
});

const Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;
