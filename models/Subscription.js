const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  user: String,
  event: String,
});

const Subscription = mongoose.model('Subscription', schema);

exports.Subscription = Subscription;