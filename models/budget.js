const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
 name: {
 type: String,
  required: true
 },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Budget', budgetSchema);