const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  age: Number,
  email: String
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
