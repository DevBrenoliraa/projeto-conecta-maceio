let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function renderCarrinho() {
    const container = document.getElementById("cart-container");
    container.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" width="60">
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
            <button onclick="removerCarrinho(${index})">Remover</button>
        `;

        container.appendChild(itemDiv);
    });

    document.getElementById("cart-total").innerText = `R$ ${total.toFixed(2)}`;
}

function removerCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderCarrinho();
}

renderCarrinho();
