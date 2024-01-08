"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubscriber = exports.updatedSubscriber = exports.createSubscriber = exports.getOneSubscriber = exports.getAllSubscribers = void 0;
const Subscriber = require('../models/subscriber');
function getAllSubscribers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subscribers = yield Subscriber.find();
            res.status(200).json(subscribers);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
exports.getAllSubscribers = getAllSubscribers;
function getOneSubscriber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subscriber = res.subscriber;
        res.send(res.subscriber);
    });
}
exports.getOneSubscriber = getOneSubscriber;
function createSubscriber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subscriber = Subscriber({
            name: req.body.name,
            subscribedToChannel: req.body.subscribedToChannel,
        });
        try {
            const newSubscriber = yield subscriber.save();
            res.status(201).json(newSubscriber);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    });
}
exports.createSubscriber = createSubscriber;
function updatedSubscriber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subscriber = res.subscriber;
        subscriber.name = req.body.name || subscriber.name;
        subscriber.subscribedToChannel =
            req.body.subscribedToChannel || subscriber.subscribedToChannel;
        try {
            const updatedSubscriber = yield subscriber.save();
            res.status(200).json(updatedSubscriber);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    });
}
exports.updatedSubscriber = updatedSubscriber;
function deleteSubscriber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subscriber = res.subscriber;
        try {
            yield subscriber.deleteOne();
            res.status(200).json({ message: 'deleted with success' });
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
}
exports.deleteSubscriber = deleteSubscriber;
