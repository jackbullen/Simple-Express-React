const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

router.get('/', resourceController.getResources);
router.post('/', resourceController.createResource);
router.get('/:resourceId', resourceController.getResource);

module.exports = router;
