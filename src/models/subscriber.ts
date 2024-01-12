import mongoose from 'mongoose';
import { ISubscriber } from '../types/subscriber.type';

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Subscriber = mongoose.model<ISubscriber>('Subscriber', subscriberSchema);
export default Subscriber;