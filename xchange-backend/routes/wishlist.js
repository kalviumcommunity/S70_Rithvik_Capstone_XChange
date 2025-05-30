const Wishlist = require('../models/Wishlist');

// Get wishlist for a user (pass userId as param for testing)
exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.params.userId }).populate('listings');
    if (!wishlist) return res.status(404).json({ error: 'Wishlist not found' });
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch wishlist' });
  }
};
