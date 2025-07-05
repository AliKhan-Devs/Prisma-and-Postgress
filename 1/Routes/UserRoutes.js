import Router from 'express';
import { CreateUser, DeleteUser, GetAllUsers, GetSingleUser, UpdateUser } from '../Controllers/UserControllers.js';
const router = Router();

router.post('/',   CreateUser);
router.put('/:id', UpdateUser);
router.get('/',GetAllUsers);
router.delete('/:id',DeleteUser);
router.get('/:id',GetSingleUser);
export default router;