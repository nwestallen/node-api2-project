// implement your posts router here
const express = require('express');
const router = express.Router();
const Post = require('./posts-model');

//GET /api/posts
router.get('/', (req, res) => {
    Post.find()
      .then(posts => {
          res.status(200).json(posts);
      })
      .catch(err => {
          res.status(500).json({ message: "The posts information could not be retrieved" });
      });
});
module.exports = router;