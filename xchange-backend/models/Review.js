const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  rating: Number
});
module.exports = mongoose.model('Review', reviewSchema);
