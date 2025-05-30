const express = require('express');
const router = express.Router();
const { getWishlist, addToWishlist } = require('../controllers/wishlistController');

router.get('/:userId', getWishlist);   // GET wishlist for a user
router.post('/add', addToWishlist);    // POST add to wishlist

module.exports = router;
