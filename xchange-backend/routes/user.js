const express = require('express');
const router = express.Router();
const { getUsers, getUser, signup } = require('../controllers/userController');

router.get('/', getUsers);       // GET all users
router.get('/:id', getUser);     // GET user by id
router.post('/signup', signup);  // POST signup
router.put('/:id', updateUser); // <-- NEW


module.exports = router;
