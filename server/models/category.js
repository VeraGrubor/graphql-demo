const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: {type: Boolean, 'default': 0},
  createdAt: { type: Date, 'default': Date.now, index: true },
  updatedAt: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Category', categorySchema);
