const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use('/api/produtos', require('./routes/route-produtos'));
// http://localhost:3000/api/produtos → lista todos os produtos
// http://localhost:3000/api/produtos/1 → busca produto por ID

app.use('/api/carrinho', require('./routes/route-carrinho'));
// http://localhost:3000/api/carrinho → listar itens no carrinho
// http://localhost:3000/api/carrinho → Adicionar itens no carrinho
// {
//     "id": 1,
//     "quantidade": 2
// }

module.exports = app;