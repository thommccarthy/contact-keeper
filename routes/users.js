const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
//express validator is handy package for clean validation
const { body, validationResult } = require('express-validator');

// bring in User model, naming convention for model is uppercase
const User = require('../models/User');

// @route  POST api/users
// @desc   Register a user
// @access Public
router.post(
  '/',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    // Extracts the validation errors from a request and makes them available in a Result object.
    const errors = validationResult(req);
    // if errors are not empty, return a 400 status and an array of errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');
  }
);

module.exports = router;
