console.log('Olá, Node.Js');
const http = require('http')
 
// Cria um servidor que responde com uma mensagem
 
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader(`Content-Type','text/plain`);
 res.end(`Bem-vindo ao meu servidor Node.js!`);});
 
//Define a porta em que o servidor vai ouvir
 
const port = 3000
 server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
 
const express = require('express');
const app = express();
 
app.get('/produtos', (req,res) => {
  const produtos = [
    { id: 1, nome: 'Camiseta', preco:29.99},
    { id: 2, nome: 'Calça Jeans', preco: 89.99},
    { id: 3, nome: 'Tênis', preco: 119.99 }
  ];
  res.json(produtos);
});
 

app.listen(port, () => {
  console.log('API rodando em http://localhost:${port}/produtos');
});
 