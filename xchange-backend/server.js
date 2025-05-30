const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const listingRoutes = require('./routes/listings');
const wishlistRoutes = require('./routes/wishlist');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/listings', listingRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.log(err));
