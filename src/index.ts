import express from 'express';
import mongoose from 'mongoose';
import e from './config/env';

const app = express();
const PORT = e.port;
const DATABASE_URL: string = e.database_url || '';
app.use(express.json());

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log('Connected to the mongoose database');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const subscribersRouter = require('./routes/subscribersRoute');
app.use('/subscribers', subscribersRouter);
const userRoute =require('./routes/userRoutes');
app.use('/users', userRoute);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
