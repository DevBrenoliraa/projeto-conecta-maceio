const produtosData = require('../data/produtos.json');
const { listarProdutos, listarProdutosID } = require('../controllers/controller-produtos');

describe("Testes controller-produtos", () => {
  test("Deve listar todos os produtos", () => {
    const res = { json: jest.fn() };
    listarProdutos({}, res);
    expect(res.json).toHaveBeenCalledWith(produtosData); // Verifica se a resposta JSON contém todos os produtos
  });

  test("Deve listar um produto pelo ID", () => {
    const res = { json: jest.fn() }; // Mock da resposta
    // jest.fn() cria uma função mock que pode ser monitorada
    listarProdutosID({ params: { id: 1 } }, res); // Chama a função com o ID 1
    expect(res.json).toHaveBeenCalledWith(produtosData[0]); // Verifica se a resposta JSON contém o produto correto
    // toHaveBeenCalledWith verifica se uma função mock foi chamada com argumentos específicos
  });
  
});
