const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  city: String,
  age: Number
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
