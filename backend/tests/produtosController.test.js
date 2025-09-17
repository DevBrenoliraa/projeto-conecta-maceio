const produtosData = require('../data/produtos.json');
const { listarProdutos, listarProdutosID } = require('../controllers/controller-produtos');

describe("Testes controller-produtos", () => {
  test("Deve listar todos os produtos", () => {
    const res = { json: jest.fn() };
    listarProdutos({}, res);
    expect(res.json).toHaveBeenCalledWith(produtosData);
  });

  test("Deve listar um produto pelo ID", () => {
    const res = { json: jest.fn() };
    listarProdutosID({ params: { id: 1 } }, res);
    expect(res.json).toHaveBeenCalledWith(produtosData[0]);
  });
  
});
