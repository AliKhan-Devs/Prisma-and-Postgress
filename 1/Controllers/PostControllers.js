import prisma from '../DB/db.config.js ';

// Create New Post
export const CreatePost = async (req, res) => {
    const {title, content, authorId} = req.body;
    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId: Number(authorId),
            },
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
}

// Update an existing Post
export const UpdatePost = async (req, res) => {
    const postId = req.params.id;
    const {title, content} = req.body;
    try {
        const post = await prisma.post.update({
            where: { id: Number(postId) },
            data: {
                title,
                content,
            },
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
}


// Delete a Post
export const DeletePost = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await prisma.post.delete({
            where: { id: Number(postId) },
        });
        res.status(200).json({ message: 'Post deleted successfully', post });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
}

// Get All Posts
export const GetAllPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
}

// Get Single Post
export const GetSinglePost = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await prisma.post.findUnique({
            where: { id: Number(postId) },
        });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve post' });
    }
}
