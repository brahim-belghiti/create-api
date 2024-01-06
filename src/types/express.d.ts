
import { ISubscriber } from './subscriber.type'; // Update the path

declare module 'express' {
  interface Response {
    subscriber?: ISubscriber;
  }
}
