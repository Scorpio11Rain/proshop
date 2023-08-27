import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
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
}

export default generateToken;