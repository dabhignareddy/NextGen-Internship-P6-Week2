import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.post('/',thankyou)

export default router