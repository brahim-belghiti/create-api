import { Request, Response, NextFunction } from "express";
import { ISubscriber } from "../types/subscriber.type";
const Subscriber = require('../models/subscriber');


async function getSubscriber(req: Request, res: Response, next: NextFunction){
    let subscriber : ISubscriber | null;
    try{
     subscriber = await Subscriber.findById(req.params.id)
     if(subscriber == null){
         return res.status(404).json({message: "connot find subscriber"})
     }
    }  catch(err: any){
     return res.status(500).json({message: err.message})
    }
    res.subscriber = subscriber;
    next();
 }


 export default getSubscriber;