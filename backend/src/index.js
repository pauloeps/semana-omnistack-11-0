// Importando o modulo express para dentro da variavel criada "express"
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Variavel que vai armazenar a aplicacao
const app = express();

app.use(cors());

//Informa o app que o formato JSON será utilizado
app.use(express.json());

app.use(routes)

// Faz com que a aplicacao seja acessada atraves de: "localhost:3333" no 
// navegador.
app.listen(3333);
