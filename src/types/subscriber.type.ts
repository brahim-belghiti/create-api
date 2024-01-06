import { Document } from "mongoose";

export interface ISubscriber extends Document {
  name: string;
  subscribedToChannel: string;
}