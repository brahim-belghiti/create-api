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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Subscriber = require('../models/subscriber');
const getSubscriber_1 = __importDefault(require("../middlewares/getSubscriber"));
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
function getOneSubscriber(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subscriber = res.subscriber;
        res.send(req.params.id);
    });
}
router.get('/', getAllSubscribers);
router.get('/:id', getSubscriber_1.default, getOneSubscriber);
// creating one
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subscriber = Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });
    try {
        const newSubscriber = yield subscriber.save();
        res.status(201).json(newSubscriber);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
module.exports = router;
