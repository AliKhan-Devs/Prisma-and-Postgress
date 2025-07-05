import Router from 'express';

import { CreatePost, DeletePost, GetAllPosts, GetSinglePost, UpdatePost } from '../Controllers/PostControllers.js';
const router = Router();

router.post('/', CreatePost);
router.get('/', GetAllPosts);
router.get('/:id', GetSinglePost);
router.put('/:id', UpdatePost);
router.delete('/:id', DeletePost);

export default router;