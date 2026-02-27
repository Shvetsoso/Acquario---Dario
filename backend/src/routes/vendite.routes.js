const express = require('express');
const router = express.Router();

const controller = require('../controllers/clienti.controller');
const authMiddleware = require('../middlewares/auth.middleware');

//  CREATE
router.post('/', authMiddleware, controller.createCliente);

module.exports = router;