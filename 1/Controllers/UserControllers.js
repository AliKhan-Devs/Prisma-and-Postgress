import prisma from '../DB/db.config.js ';

// Create New User
export const CreateUser = async (req, res) => {

    const { name, email, password } = req.body;
    const findUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (findUser) {
        return res.status(400).json({ error: 'User already exists' });
    }
    try {
        const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
}

// Update Existing User
export const UpdateUser = async (req, res) => {
    const Userid = req.params.id;
    const {name,email,password} = req.body;
    try {
        const User = await prisma.user.update({
            where:{id:Number(Userid)},
            data:{
                name,
                email,
                password
            }
        })
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
}

// Delte a User
export const DeleteUser = async (req, res) => {
    const Userid = req.params.id;
    try {
        const user = await prisma.user.delete({
            where: { id: Number(Userid) },
        });
        res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
}

// Get All Users
export const GetAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

// Get A single user

export const GetSingleUser = async (req, res) => {
    const Userid = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(Userid) },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
}