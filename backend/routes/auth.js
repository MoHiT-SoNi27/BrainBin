const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// create a user using:POST /api/auth/createuser, no login required
router.post(
  '/creatuser',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //  Pre-check: does the email already exist?
      const existingUser = await User.findOne({ email: req.body.email });
      console.log("name", req.body.name);
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      //  If not, create and save the user
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

module.exports = router;
