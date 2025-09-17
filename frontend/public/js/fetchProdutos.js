// const urlApi = 'http://localhost:3000/api/produtos';

// async function carregarProdutos () {
//     try {
//         const res = await fetch(urlApi);

//         if(!res.ok ) {
//             throw new Error(`Erro na requisição ${res.status}`);
//         }

//         const produtos = await res.json();
//         const productsContainer = document.getElementById('products-container');
//         productsContainer.innerHTML = '';

//         produtos.forEach(produto => {
//             const productsCard = document.createElement('div');
//             productsCard.classList.add('products_Card');

//             productsCard.innerHTML = `
//                 <img src="${produto.imagem}" alt="${produto.nome}" class="product_Imagem">
//                 <h3 class="product_title">${produto.nome}</h3>
//                 <div class="card_footer">
//                     <p class="product_preco">R$${produto.preco}</p>
//                     <button class="btn_comprar">Comprar</button>
//                 </div>
//             `;

//             // botão comprar
//             const btnComprar = productsCard.querySelector('.btn_comprar');
//             btnComprar.addEventListener('click', () => adicionarAoCarrinho(produto));

//             productsContainer.appendChild(productsCard);
//         });

//     } catch (error) {
//         return `Erro ao carregar os produtos na página: ${error}`;
//     } 
// };

// // Adiciona ao carrinho (salva no localStorage)
// function adicionarAoCarrinho(produto) {
//     let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

//     // verifica se já tem esse produto no carrinho
//     const produtoExistente = carrinho.find(item => item.id === produto.id);

//     if (produtoExistente) {
//         produtoExistente.quantidade += 1;
//     } else {
//         carrinho.push({ ...produto, quantidade: 1 });
//     }

//     localStorage.setItem('carrinho', JSON.stringify(carrinho));
//     alert(`${produto.nome} foi adicionado ao carrinho!`);
// }

// carregarProdutos();

const urlApi = 'http://localhost:3000/api/produtos';

async function carregarProdutos() {
  try {
    const res = await fetch(urlApi);

    if (!res.ok) {
      throw new Error(`Erro na requisição ${res.status}`);
    }

    const produtos = await res.json();
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    produtos.forEach(produto => {
      const productsCard = document.createElement('div');
      productsCard.classList.add('products_Card');

      productsCard.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="product_Imagem">
        <h3 class="product_title">${produto.nome}</h3>
        <div class="card_footer">
            <p class="product_preco">R$${produto.preco}</p>
            <button class="btn_comprar">Comprar</button>
        </div>
      `;

      // botão comprar
      const btnComprar = productsCard.querySelector('.btn_comprar');
      btnComprar.addEventListener('click', () => adicionarAoCarrinho(produto));

      productsContainer.appendChild(productsCard);
    });

  } catch (error) {
    return `Erro ao carregar os produtos na página: ${error}`;
  }
}

// Adiciona ao carrinho (salva no localStorage)
function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // verifica se já tem esse produto no carrinho
  const produtoExistente = carrinho.find(item => item.id === produto.id);

  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${produto.nome} foi adicionado ao carrinho!`);
}

carregarProdutos();