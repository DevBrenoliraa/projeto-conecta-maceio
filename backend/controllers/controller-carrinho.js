const path = require('path');
const fs = require('fs');

const produtosPath = path.join(__dirname, '../data/produtos.json');

// Banco de dados local (memória)
let carrinho = [];

// Função auxiliar para calcular o total
function calcularTotal() {
  return carrinho.reduce((soma, item) => {
    return soma + Number(item.preco) * Number(item.quantidade);
  }, 0);
}

// GET - Listar os itens no carrinho
const listarItens = (req, res) => {
  try {
    res.json({
      itens: carrinho,
      total: calcularTotal().toFixed(2) // retorna sempre em string com 2 casas decimais
    });
  } catch (error) {
    res.status(500).json({ status: 'erro', mensagem: error.message });
  }
};

// POST - Adicionar itens no carrinho
const addItens = (req, res) => {
  try {
    let { id, quantidade } = req.body;

    id = parseInt(id);
    quantidade = parseInt(quantidade);

    const produtos = JSON.parse(fs.readFileSync(produtosPath, 'utf-8'));
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
      return res.status(404).json({
        status: 'erro',
        mensagem: 'Produto não encontrado'
      });
    }

    const itemExistente = carrinho.find(p => p.id === id);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      carrinho.push({ ...produto, quantidade });
    }

    res.json({
      status: 'sucesso',
      mensagem: "Produto adicionado ao carrinho",
      carrinho,
      total: calcularTotal().toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ status: 'erro', mensagem: error.message });
  }
};

// DELETE - Remover itens do carrinho
const deleteItens = (req, res) => {
  try {
    const { id } = req.body;
    carrinho = carrinho.filter(item => item.id !== parseInt(id));

    res.json({
      status: 'sucesso',
      mensagem: "Produto removido",
      carrinho,
      total: calcularTotal().toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ status: 'erro', mensagem: error.message });
  }
};

module.exports = { listarItens, addItens, deleteItens };
