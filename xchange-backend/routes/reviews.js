const express = require('express');
const router = express.Router();
const { getReviews, getReview } = require('../controllers/reviewController');

router.get('/', getReviews);         // GET all reviews
router.get('/:id', getReview);       // GET single review

module.exports = router;
