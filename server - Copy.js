const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const volunteerRoutes = require('./routes/volunteer');
const contactRoutes = require('./routes/contact');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/volunteer', volunteerRoutes);
app.use('/api/contact', contactRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
  );
}).catch(err => console.error('❌ MongoDB connection error:', err));
