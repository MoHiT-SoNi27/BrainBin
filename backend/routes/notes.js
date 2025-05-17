const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// Route:1 Get all notes using: GET /api/notes/fetchallnotes, login required

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    }
    catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route:2 Add a new note using: POST /api/notes/addnote, login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters long').isLength({ min: 5 }),
    body('tag', 'Tag must be at least 1 character long').isLength({ min: 1 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Destructure the request body
    const { title, description, tag } = req.body;
    try {
        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id,
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error('Error saving note:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
);



module.exports = router;