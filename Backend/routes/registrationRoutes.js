const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.post('/', registrationController.create);
router.get('/', registrationController.getAll);
router.get('/:id', registrationController.getById);
router.put('/:id', registrationController.update);
router.delete('/:id', registrationController.remove);

module.exports = router;
