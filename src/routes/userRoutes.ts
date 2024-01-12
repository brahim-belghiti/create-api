import express from 'express';
const router = express.Router();
import { getUsers, signUp, loginUser } from '../controllers/userController';


router.get('/', getUsers);
router.post('/', signUp);
router.post('/login', loginUser);


module.exports = router;