const Review = require('../models/Review');

// GET: All reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('listing user', 'title name');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

// GET: Single review
exports.getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('listing user', 'title name');
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch review' });
  }
};

// POST: Add review
exports.addReview = async (req, res) => {
  try {
    const { listing, user, text, rating } = req.body;
    const review = new Review({ listing, user, text, rating });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add review' });
  }
};
