import express from 'express';
import mongoose from 'mongoose';
import e from './config/env';
const app = express();

const PORT = e.port;
const DATABASE_URL: string = e.database_url || ''; 


mongoose.connect(DATABASE_URL)
  .then(() => {
    console.log('Connected to the mongoose database');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  app.use(express.json());

const subscribersRouter = require('./routes/subscribersRoute');
app.use('/subscribers', subscribersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
