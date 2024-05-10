const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/profile/:userId', userController.getUserProfile);
router.put('/profile/:userId', userController.updateUserProfile);
router.delete('/profile/:userId', userController.deleteUserProfile);

module.exports = router;