const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  body: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', index: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', index: true },
  createdAt: { type: Date, 'default': Date.now, index: true },
  updatedAt: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Post', postSchema);