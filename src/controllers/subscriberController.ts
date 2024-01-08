import { Request, Response } from 'express';
import * as subscriberService from '../services/subscriberService';

export async function getAllSubscribers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const subscribers = await subscriberService.getAllSubscribers();
    res.status(200).json(subscribers);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function getOneSubscriber(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const subscriberId = req.params.id;
    const subscriber = await subscriberService.getSubscriberById(subscriberId);
    if (!subscriber) {
      res.status(404).json({ message: 'Subscriber not found' });
      return;
    }
    res.status(200).json(subscriber);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function createSubscriber(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newSubscriber = await subscriberService.createSubscriber(req.body);
    res.status(201).json(newSubscriber);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateSubscriber(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const subscriberId = req.params.id;
    const updatedSubscriber = await subscriberService.updateSubscriber(
      subscriberId,
      req.body
    );
    res.status(200).json(updatedSubscriber);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteSubscriber(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const subscriberId = req.params.id;
    await subscriberService.deleteSubscriber(subscriberId);
    res.status(200).json({ message: 'Subscriber deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
