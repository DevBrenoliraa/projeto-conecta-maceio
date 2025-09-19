const url = 'http://localhost:3000/api/produtos';
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Carregar produtos
async function carregarProdutos() {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status}`);
        }

        const produtos = await res.json();
        const container = document.getElementById('products-container');
        container.innerHTML = "";

        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.classList.add('products_Card');

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" class="product_Imagem">
                <h3 class="product_title">${produto.nome}</h3>
                <div class="card_footer">
                    <span class="product_preco">R$ ${produto.preco.toFixed(2)}</span>
                    <button class="btn_comprar">Comprar</button>
                </div>
            `;

            // Evento para adicionar ao carrinho
            card.querySelector(".btn_comprar").addEventListener("click", () => {
                adicionarCarrinho(produto);
            });

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

// Adicionar ao carrinho e salvar no localStorage
function adicionarCarrinho(produto) {
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho!`);
}

carregarProdutos();
