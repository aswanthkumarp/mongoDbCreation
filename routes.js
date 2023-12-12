const express = require('express');
const User = require('./model/userModel');
const router = express.Router();

router.post('/user', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.post('/post', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

router.post('/comments', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error creating comment' });
  }
});

module.exports = router;
