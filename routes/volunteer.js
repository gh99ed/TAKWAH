const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

router.post('/', async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: 'تم التسجيل بنجاح' });
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ ما', error });
  }
});

module.exports = router;
