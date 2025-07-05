import Router from 'express';
import { CreateComment, DeleteComment, GetAllCommentsForPost, GetSingleComment, UpdateComment } from '../Controllers/CommentControllers.js';
const router = Router();
router.get('/postComment/:postId', GetAllCommentsForPost);
router.get('/:id',GetSingleComment );
router.post('/', CreateComment);
router.put('/:id', UpdateComment);
router.delete('/:id', DeleteComment);
export default router;