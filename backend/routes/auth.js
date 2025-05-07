const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const { body, validationResult  } = require('express-validator');
//create a user using: POST "/api/auth/createuser" . No login required

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => {res.json(user)})

    console.log(req.body)
    const user = User(req.body)
    user.save()
});

module.exports = router;