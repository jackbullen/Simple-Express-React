const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        const {username, password, email} = req.body;

        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const existingEmail = await User.findOne({ where: { email } });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = new User({username, passwordHash, email});

        await user.save();

        const secretKey = "1234"; 
        const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
    
        res.json({ token, userId: user.id });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({ message: 'Incorrect email' });
        }

        const isPasswordValid = await user.verifyPassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }

        const secretKey = "1234"; 
        const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

        res.json({ token, userId: user.id });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



