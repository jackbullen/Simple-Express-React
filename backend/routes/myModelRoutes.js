const express = require('express');
const router = express.Router();
const myModelController = require('../controllers/myModelController');

router.post('/', myModelController.createMyModel);
router.get('/', myModelController.getMyModels);

module.exports = router;