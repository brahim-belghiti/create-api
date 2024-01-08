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
exports.deleteSubscriber = exports.updateSubscriber = exports.createSubscriber = exports.getSubscriberById = exports.getAllSubscribers = void 0;
const Subscriber = require('../models/subscriber');
function getAllSubscribers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subscribers = yield Subscriber.find();
            return subscribers;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.getAllSubscribers = getAllSubscribers;
function getSubscriberById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subscriber = yield Subscriber.findById(id);
            return subscriber;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.getSubscriberById = getSubscriberById;
function createSubscriber(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newSubscriber = yield Subscriber.create(data);
            return newSubscriber;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.createSubscriber = createSubscriber;
function updateSubscriber(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedSubscriber = yield Subscriber.findByIdAndUpdate(id, data, { new: true });
            return updatedSubscriber;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.updateSubscriber = updateSubscriber;
function deleteSubscriber(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Subscriber.findByIdAndDelete(id);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.deleteSubscriber = deleteSubscriber;
