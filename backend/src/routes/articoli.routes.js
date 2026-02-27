const express = require('express');
const router = express.Router();

const controller = require('../controllers/articoli.controller');
const authMiddleware = require('../middlewares/auth.middleware');

//  CREATE
router.post('/', authMiddleware, controller.createArticolo);

//  READ ALL
router.get('/', controller.getAllArticoli);

//  READ ONE
router.get('/:id', controller.getArticoloById);

//  UPDATE
router.put('/:id', authMiddleware, controller.updateArticolo);

module.exports = router;