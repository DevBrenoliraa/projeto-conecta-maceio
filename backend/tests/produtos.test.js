const produtos = require('../data/produtos.json'); // Importe o arquivo JSON diretamente - Array de Objetos

describe("Testes dados de produtos:", () => { // Descreva o conjunto de testes do JSON

    test("Deve listar todos os produtos do array", () => { // Teste para verificar a contagem de produtos
        expect(produtos).toHaveLength(9); // Verifica se o array contém exatamente 9 produtos
        // toHaveLength verifica o tamanho de um array ou string
    });

    test("Deve listar um produto do array pelo ID", () => { // Teste para verificar o ID do primeiro produto
        expect(produtos[0].id).toBe(1); // Verifica se o ID do primeiro produto é 1
        // toBe verifica igualdade estrita (===)
    });

    test("Deve conter as propriedades do produto no array", () => { // Teste para verificar as propriedades do primeiro produto
        expect(produtos[0]).toHaveProperty('id'); // Verifica se o primeiro produto tem a propriedade 'id'
        // toHaveProperty verifica se um objeto possui uma propriedade específica
        expect(produtos[0]).toHaveProperty('nome');
        expect(produtos[0]).toHaveProperty('preco');
        expect(produtos[0]).toHaveProperty('estoque');
        expect(produtos[0]).toHaveProperty('descricao');
        expect(produtos[0]).toHaveProperty('imagem');
    });

    test("Deve conter no array", () => { // Teste para verificar se um produto específico está presente no array
        expect(produtos).toContainEqual( // Verifica se o array contém um objeto específico
            // toContainEqual verifica se um array contém um elemento específico (usado para objetos)
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

    test("Deve conter no array", () => { //  Teste para verificar se um produto específico está presente no array
        expect(produtos).toEqual( // Verifica se o array é igual a uma matriz que contém um objeto específico
            // toEqual verifica a igualdade profunda (útil para comparar objetos e arrays)
            expect.arrayContaining([expect.objectContaining({ nome: 'Blusa Renda Filé Feminina' })])
        );
    })

});
