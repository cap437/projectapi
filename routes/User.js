import express from 'express'
import { sendPasswordReset} from '../controllers/User.js';
import { verifyTken } from '../verifyToken.js';

const router = express.Router();


//send reset link
router.post('/sendresetlink', sendPasswordReset);

export default router; 