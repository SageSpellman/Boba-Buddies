const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paycheckSchema = new Schema({
    date: {
      type: Date,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Paycheck', paycheckSchema);