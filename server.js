const express = require('require')

const app = express()

app.get('/', (req, res)=>{
    return res.send('Bem vindo(a) a nossa página de Bolos.');
});

app.get('/produto', (req, res)=>{
    return res.send('Produtos');
});

app.get('/cardapio', (req, res)=>{
    return res.send('Cardápio');
});

app.get('/aprenda', (req, res)=>{
    return res.send('aprenda');
});

app.get('/maracuja', (req, res)=>{
    return res.send('maracuja');
});

app.get('/contatos', (req, res)=>{
    return res.send('contatos');
});

app.listen('3344', console.log('Servidor ON na porta 3344'));
