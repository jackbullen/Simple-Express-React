const express = require('express');
const router = express.Router();
const degreeController = require('../controllers/degreeController');

router.get('/', degreeController.getAllDegree);

module.exports = router;