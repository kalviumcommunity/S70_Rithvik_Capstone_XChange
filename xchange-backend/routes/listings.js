const express = require('express');
const router = express.Router();
const { getListings, getListing } = require('../controllers/listingController');

router.get('/', getListings);      // GET all
router.get('/:id', getListing);    // GET by id

module.exports = router;
