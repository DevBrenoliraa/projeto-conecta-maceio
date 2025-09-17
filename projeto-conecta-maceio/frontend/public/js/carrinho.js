function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.getElementById('carrinho-container');
    carrinhoContainer.innerHTML = '';

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    carrinho.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho_item');

        itemDiv.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="carrinho_img">
            <h4>${item.nome}</h4>
            <p>Preço: R$${item.preco}</p>
            <p>Quantidade: ${item.quantidade}</p>
            <button class="btn-remover">Remover</button>
        `;

        // botão remover
        const btnRemover = itemDiv.querySelector('.btn-remover');
        btnRemover.addEventListener('click', () => removerDoCarrinho(index));

        carrinhoContainer.appendChild(itemDiv);
    });
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1;
    } else {
        carrinho.splice(index, 1);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho(); // recarrega a lista
}

carregarCarrinho();
