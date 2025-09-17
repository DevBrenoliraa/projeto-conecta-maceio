const express = require('express');
const router = express.Router();
const { listarItens, addItens, deleteItens } = require('../controllers/controller-carrinho');

router.get('/', listarItens);
router.post('/', addItens);
router.delete('/:id', deleteItens);

module.exports = router;