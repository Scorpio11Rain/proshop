import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email: email});
    if (user && (await user.matchPassword(password))){
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30
        });

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    } 
})

const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')

})

const logoutUser = asyncHandler(async (req, res) => {
    res.send('logotu user')
})

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
})

const getUsers = asyncHandler(async (req, res) => { 
    res.send('get users')
})

const getUserByID = asyncHandler(async (req, res) => {
    res.send('get users')
})

const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user')
})

const updateUser = asyncHandler(async (req, res) => {
    res.send('update user')
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, 
    getUsers, getUserByID, deleteUser, updateUser}