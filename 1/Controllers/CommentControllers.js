import prisma from "../DB/db.config.js";

// Create New Comment
export const CreateComment = async (req, res) => {

    const { content, postId, userId } = req.body;

    try {
        const comment = await prisma.comment.create({
            data: {
                content,
                postId: Number(postId),
                userId: Number(userId),
            },
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create comment' });
    }
}

// Update an existing Comment
export const UpdateComment = async (req, res) => {
    const commentId = req.params.id;
    const { content } = req.body;
    try {
        const comment = await prisma.comment.update({
            where: { id: Number(commentId) },
            data: {
                content,
            },
        });
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update comment' });
    }
}

// Delete a Comment
export const DeleteComment = async (req, res) => {
    const commentId = req.params.id;
    try {
        const comment = await prisma.comment.delete({
            where: { id: Number(commentId) },
        });
        res.status(200).json({ message: 'Comment deleted successfully', comment });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete comment' });
    }
}

// Get All Comments for a Post
export const GetAllCommentsForPost = async (req, res) => {
    const postId = req.params.postId;
    try {
        const comments = await prisma.comment.findMany({
            where: { postId: Number(postId) },
        });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve comments' });
    }
}

// Get Single Comment
export const GetSingleComment = async (req, res) => {   
    const commentId = req.params.id;
    try {
        const comment = await prisma.comment.findUnique({
            where: { id: commentId },
        });
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve comment' });
    }
}