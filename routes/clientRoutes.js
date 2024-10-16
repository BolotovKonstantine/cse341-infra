// routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const isAuthenticated = require('../middleware/authenticate');

router.post('/',isAuthenticated,  clientController.createClient);
router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientById);
router.put('/:id', isAuthenticated, clientController.updateClient);
router.delete('/:id', isAuthenticated, clientController.deleteClient);

module.exports = router;