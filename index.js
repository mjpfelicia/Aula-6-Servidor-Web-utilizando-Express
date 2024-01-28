const express = require("express");
const app = express();
const port = 443;
app.get("/", (req, res) => {
  res.send("bem vindo ao meu  servidor web utilizando express!");
});

app.listen(port, () => {
  console.log(`Servido rodando na porta ${port}`);
});
