import Router from 'express';
import { CreateUser } from '../Controllers/UserControllers.js';
const router = Router();

router.post('/',   CreateUser);
export default router;