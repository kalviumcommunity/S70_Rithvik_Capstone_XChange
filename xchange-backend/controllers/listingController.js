const Listing = require('../models/Listing');

// CREATE Listing (WRITE)
exports.createListing = async (req, res) => {
  try {
    const { title, description, category, location } = req.body;
    const owner = req.user._id;
    const newListing = new Listing({ title, description, category, location, owner });
    await newListing.save();    // <-- WRITE to DB
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create listing' });
  }
};

// GET All Listings (READ)
exports.getListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate('owner', 'name email'); // <-- READ from DB
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
};

// GET One Listing (READ)
exports.getListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('owner', 'name email'); // <-- READ from DB
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listing' });
  }
};

// UPDATE Listing (WRITE)
exports.updateListing = async (req, res) => {
  try {
    const listing = await Listing.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    ); // <-- WRITE to DB
    if (!listing) return res.status(404).json({ error: 'Listing not found or not yours' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update listing' });
  }
};

// DELETE Listing (WRITE)
exports.deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findOneAndDelete({ _id: req.params.id, owner: req.user.id }); // <-- WRITE to DB
    if (!listing) return res.status(404).json({ error: 'Listing not found or not yours' });
    res.json({ message: 'Listing deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete listing' });
  }
};
