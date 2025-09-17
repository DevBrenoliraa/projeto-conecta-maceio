const produtos = require('../data/produtos.json');

describe("Testes dados de produtos:", () => {

    test("Deve listar todos os produtos do array", () => {
        expect(produtos).toHaveLength(9);
    });

    test("Deve listar um produto do array pelo ID", () => {
        expect(produtos[0].id).toBe(1);
    });

    test("Deve conter as propriedades do produto no array", () => {
        expect(produtos[0]).toHaveProperty('id');
        expect(produtos[0]).toHaveProperty('nome');
        expect(produtos[0]).toHaveProperty('preco');
        expect(produtos[0]).toHaveProperty('estoque');
        expect(produtos[0]).toHaveProperty('descricao');
        expect(produtos[0]).toHaveProperty('imagem');
    });

    test("Deve conter no array", () => {
        expect(produtos).toContainEqual(
            {
                "id": 6,
                "nome": "Bandeja Palha Ouricuri",
                "preco": 38.00,
                "estoque": 18,
                "descricao": "Bandeja artesanal trançada em palha de ouricuri. Ideal para servir cafés da manhã, lanches ou como peça decorativa rústica. Leve a beleza e a resistência da natureza para sua casa.",
                "imagem": "http://localhost:3000/images/bandeja-palha-ouricuri-rustica.png"
            }
        );
    });

    test("Deve conter no array", () => {
        expect(produtos).toEqual(
            expect.arrayContaining([expect.objectContaining({ nome: 'Blusa Renda Filé Feminina' })])
        );
    })

});
