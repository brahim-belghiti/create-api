"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteSubscriber = exports.updateSubscriber = exports.createSubscriber = exports.getOneSubscriber = exports.getAllSubscribers = void 0;
const subscriberService = __importStar(require("../services/subscriberService"));
function getAllSubscribers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subscribers = yield subscriberService.getAllSubscribers();
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
        try {
            const subscriberId = req.params.id;
            const subscriber = yield subscriberService.getSubscriberById(subscriberId);
            if (!subscriber) {
                res.status(404).json({ message: 'Subscriber not found' });
                return;
            }
            res.status(200).json(subscriber);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
exports.getOneSubscriber = getOneSubscriber;
function createSubscriber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newSubscriber = yield subscriberService.createSubscriber(req.body);
            res.status(201).json(newSubscriber);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.createSubscriber = createSubscriber;
function updateSubscriber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subscriberId = req.params.id;
            const updatedSubscriber = yield subscriberService.updateSubscriber(subscriberId, req.body);
            res.status(200).json(updatedSubscriber);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.updateSubscriber = updateSubscriber;
function deleteSubscriber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subscriberId = req.params.id;
            yield subscriberService.deleteSubscriber(subscriberId);
            res.status(200).json({ message: 'Subscriber deleted' });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
exports.deleteSubscriber = deleteSubscriber;
