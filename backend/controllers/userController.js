const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.getUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

exports.updateUserProfile = async (req, res) => {
    try{
        const userId = req.params.userId;
        const updatedProfileData = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, updatedProfileData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(updatedUser);

    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.deleteUserProfile = async (req, res) => {
    try{
        const userId = req.params.userId;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.destroy();

        res.json({ message: 'User deleted successfully' });

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};