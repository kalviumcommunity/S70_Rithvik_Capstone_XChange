const Listing = require('../models/Listing');

// GET: All listings
exports.getListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate('owner', 'name email');
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
};

// GET: Single listing by id
exports.getListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('owner', 'name email');
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listing' });
  }
};

// POST: Create listing
exports.createListing = async (req, res) => {
  try {
    // If you have authentication middleware, use req.user._id; else, use req.body.owner for now
    const { title, description, category, location, owner } = req.body;
    const newListing = new Listing({ title, description, category, location, owner });
    await newListing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create listing' });
  }
};

// Update Listing
exports.updateListing = async (req, res) => {
  try {
    // Assuming you use authentication: req.user._id is the logged in user
    const listing = await Listing.findOneAndUpdate(
      { _id: req.params.id, owner: req.user ? req.user._id : undefined },
      req.body,
      { new: true }
    );
    if (!listing) return res.status(404).json({ error: 'Listing not found or not yours' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update listing' });
  }
};
