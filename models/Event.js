const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: String,
});
const Event = mongoose.model('Event', schema);

exports.Event = Event;