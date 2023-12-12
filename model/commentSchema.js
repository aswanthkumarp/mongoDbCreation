const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  blogPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  dateTimePosted: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
