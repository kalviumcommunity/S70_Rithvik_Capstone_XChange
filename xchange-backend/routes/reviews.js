const express = require('express');
const router = express.Router();
const { getReviews, getReview, addReview } = require('../controllers/reviewController');

router.get('/', getReviews);           // GET all reviews
router.get('/:id', getReview);         // GET single review
router.post('/', addReview);           // POST new review

module.exports = router;
