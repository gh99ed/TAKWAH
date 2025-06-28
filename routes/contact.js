const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(200).json({ message: 'تم إرسال الرسالة بنجاح' });
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء الإرسال', error });
  }
});

module.exports = router;
