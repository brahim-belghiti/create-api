const Subscriber =  require('../models/subscriber');
import { ISubscriber } from '../types/subscriber.type';

export async function getAllSubscribers(): Promise<ISubscriber[]> {
  try {
    const subscribers: ISubscriber[] = await Subscriber.find();
    return subscribers;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getSubscriberById(id: string): Promise<ISubscriber | null> {
  try {
    const subscriber: ISubscriber | null = await Subscriber.findById(id);
    return subscriber;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function createSubscriber(data: ISubscriber): Promise<ISubscriber> {
  try {
    const newSubscriber: ISubscriber = await Subscriber.create(data);
    return newSubscriber;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function updateSubscriber(id: string, data: Partial<ISubscriber>): Promise<ISubscriber | null> {
  try {
    const updatedSubscriber: ISubscriber | null = await Subscriber.findByIdAndUpdate(id, data, { new: true });
    return updatedSubscriber;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function deleteSubscriber(id: string): Promise<void> {
  try {
    await Subscriber.findByIdAndDelete(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
}
