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


// Update user profile (basic)
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
};
