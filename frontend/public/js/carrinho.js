function getCartItems() {
    // Faça uma requisição para obter os itens do carrinho
    fetch('/api/carrinho')
      .then(response => response.json())
      .then(data => {
        // Atualize a lista de itens do carrinho na página
        $('#cart-items').empty();
        data.forEach(item => {
          $('#cart-items').append(`
            <li>${item.name} - R$ ${item.price} (Quantidade: ${item.quantidade})</li>
          `);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  function addToCart(itemId, itemName, itemPrice) {
    // Faça uma requisição para adicionar o item ao carrinho
    fetch('/api/carrinho', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: itemId,
        name: itemName,
        price: itemPrice
      })
    })
      .then(response => response.json())
      .then(data => {
        // Atualize a lista de itens do carrinho na página
        getCartItems();
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  $(document).ready(function() {
    // Chame a função para obter os dados do carrinho assim que a página for carregada
    getCartItems();
  
    // Adicione um evento de clique para adicionar um item ao carrinho
    $('#add-to-cart').click(function() {
      // Obtenha os dados do item a ser adicionado ao carrinho
      var itemId = $('#item-id').val();
      var itemName = $('#item-name').val();
      var itemPrice = $('#item-price').val();
  
      // Verifique se os campos estão preenchidos
      if (itemId && itemName && itemPrice) {
        // Chame a função para adicionar o item ao carrinho
        addToCart(itemId, itemName, itemPrice);
      } else {
        alert('Preencha todos os campos para adicionar o item ao carrinho.');
      }
    });
  });