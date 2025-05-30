const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  // Add any other fields you want (avatar, etc)
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }]
});

module.exports = mongoose.model('User', UserSchema);
