const express = require('express');
const router = express.Router();
const { listarProdutos, listarProdutosID } = require('../controllers/controller-produtos');

router.get('/', listarProdutos);
router.get('/:id', listarProdutosID);

module.exports = router;