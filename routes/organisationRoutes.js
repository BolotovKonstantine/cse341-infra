// routes/organisationRoutes.js
const express = require('express');
const router = express.Router();
const organisationController = require('../controllers/organisationController');

router.post('/', organisationController.createOrganisation);
router.get('/', organisationController.getAllOrganisations);
router.get('/:id', organisationController.getOrganisationById);
router.patch('/:id', organisationController.updateOrganisation);
router.delete('/:id', organisationController.deleteOrganisation);

module.exports = router;