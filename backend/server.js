const app = require('./app');
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    status: "ok",
    mensagem: "API rodando corretamente!",
    endpoints: {
      produtos: "/api/produtos",
      carrinho: "/api/carrinho"
    }
  });
});

app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});