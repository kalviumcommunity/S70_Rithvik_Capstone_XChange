const express = require('express');
const router = express.Router();
const { getListings, getListing, createListing } = require('../controllers/listingController');

router.get('/', getListings);      // GET all
router.get('/:id', getListing);    // GET by id
router.post('/', createListing);   // POST new listing
router.put('/:id', updateListing); // <-- NEW PUT endpoint


module.exports = router;
