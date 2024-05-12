const express = require('express');
const router = express.Router();
const myModelController = require('../controllers/myModelController');

router.post('/', myModelController.createMyModel);
router.get('/', myModelController.getAllMyModels);

module.exports = router;