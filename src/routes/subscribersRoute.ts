import express from 'express';
const router = express.Router();
import getSubscriber from '../middlewares/getSubscriber';
import { getAllSubscribers, getOneSubscriber, createSubscriber, updateSubscriber, deleteSubscriber } from '../controllers/subscriberController';


router.get('/', getAllSubscribers);
router.get('/:id', getSubscriber, getOneSubscriber);
router.post('/', createSubscriber);
router.patch('/:id', getSubscriber, updateSubscriber);
router.delete('/:id', getSubscriber, deleteSubscriber);

module.exports = router;