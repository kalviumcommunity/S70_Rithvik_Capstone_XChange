const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('listing user', 'title name');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

exports.getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('listing user', 'title name');
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch review' });
  }
};
