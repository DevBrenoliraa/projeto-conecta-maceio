const path = require('path');
const fs = require('fs');

const produtosPath = path.join(__dirname, '../data/produtos.json');

// GET - Listar todos os produtos:
const listarProdutos = (req, res) => {
    const produtos = JSON.parse(fs.readFileSync(produtosPath, 'utf-8'));
    res.json(produtos);
};

const listarProdutosID = (req, res) => {
    const produtos = JSON.parse(fs.readFileSync(produtosPath, 'utf-8'));
    const produto = produtos.find(p => p.id === parseInt(req.params.id));
  
    if (!produto) {
      return res.status(404).json({
        status: 'erro',
        mensagem: 'Produto não encontrado',
      });
    }
  
    res.json(produto);
  };

module.exports = { listarProdutos, listarProdutosID };