// routes/organisationRoutes.js
const express = require('express');
const router = express.Router();
const organisationController = require('../controllers/organisationController');
const isAuthenticated = require('../middleware/authenticate');


router.post('/', isAuthenticated,  organisationController.createOrganisation);
router.get('/', organisationController.getAllOrganisations);
router.get('/:id', organisationController.getOrganisationById);
router.patch('/:id', isAuthenticated, organisationController.updateOrganisation);
router.delete('/:id', isAuthenticated, organisationController.deleteOrganisation);

module.exports = router;