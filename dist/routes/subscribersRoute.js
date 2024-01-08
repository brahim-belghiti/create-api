"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const getSubscriber_1 = __importDefault(require("../middlewares/getSubscriber"));
const subscriberController_1 = require("../controllers/subscriberController");
router.get('/', subscriberController_1.getAllSubscribers);
router.get('/:id', getSubscriber_1.default, subscriberController_1.getOneSubscriber);
router.post('/', subscriberController_1.createSubscriber);
router.patch('/:id', getSubscriber_1.default, subscriberController_1.updatedSubscriber);
router.delete('/:id', getSubscriber_1.default, subscriberController_1.deleteSubscriber);
module.exports = router;
