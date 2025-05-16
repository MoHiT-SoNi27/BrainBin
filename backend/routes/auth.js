const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'your_jwt_secret_key_here';

//Route:1 create a user using:POST /api/auth/createuser, no login required
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

      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);

      //  If not, create and save the user
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      
      res.json({ authToken });
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

//Route:2 authrenticate a user using:POST /api/auth/login, no login required
router.post(
  '/login',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if the user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });

      // Check if the password is correct
      // if (user.password !== password) {
      //   return res.status(400).json({ error: 'Invalid credentials' });
      // }

      // res.json({ message: 'Login successful', user });
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Route:3 Get logged in user details using: POST /api/auth/getuser, login required
router.post(
  '/getuser', fetchuser,
  async (req, res) => {
    try {
      const userId = req.user.id; // Assuming you have middleware to extract user ID from the token
      const user = await User.findById(userId).select('-password'); // Exclude password from the response
      res.send(user);
      res.json(user);
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

module.exports = router;
