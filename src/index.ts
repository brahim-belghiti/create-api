import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = 3000;
const DATABASE_URL = process.env.DATABASE_URL || ''; 

mongoose.connect(DATABASE_URL)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
