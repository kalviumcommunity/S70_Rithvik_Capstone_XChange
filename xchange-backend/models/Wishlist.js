const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }]
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
