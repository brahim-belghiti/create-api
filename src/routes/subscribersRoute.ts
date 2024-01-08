import express from 'express';
const router = express.Router();
import getSubscriber from '../middlewares/getSubscriber';
import { getAllSubscribers, getOneSubscriber, createSubscriber, updatedSubscriber, deleteSubscriber } from '../controllers/subscriberController';


router.get('/', getAllSubscribers);
router.get('/:id', getSubscriber, getOneSubscriber);
router.post('/', createSubscriber);
router.patch('/:id', getSubscriber, updatedSubscriber);
router.delete('/:id', getSubscriber, deleteSubscriber);

module.exports = router;