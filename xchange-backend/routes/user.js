const express = require('express');
const router = express.Router();
const { getUsers, getUser } = require('../controllers/userController');

router.get('/', getUsers);       // GET all users
router.get('/:id', getUser);     // GET user by id

module.exports = router;
