const express = require('express');
const app = express();
const PORT = 3000
const produtos = require('./src/mocs/sneakersList');
const animeController = require('./src/controllers/animeControllers')
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Health Check')
});

app.get('/cep', (req, res) => {
    res.send(
        {
            "cep": "01001-000",
            "logradouro": "Praça da Sé",
            "complemento": "lado ímpar",
            "unidade": "",
            "bairro": "Sé",
            "localidade": "São Paulo",
            "uf": "SP",
            "estado": "São Paulo",
            "regiao": "Sudeste",
            "ibge": "3550308",
            "gia": "1004",
            "ddd": "11",
            "siafi": "7107"
        }
    )
});

app.get('/products', (req, res) => {
    res.send(
        produtos
    )
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        res.send(produto);
    } else {
        res.status(404).send({ message: "Produto não encontrado" });
    }
});

app.get('/animes', animeController.getAllAnimes);

app.get('/animes/:id', animeController.getAnimeById);

app.post('/animes', animeController.createAnime);

app.put('/animes/:id', animeController.updateAnime);

app.delete('/animes/:id', animeController.deleteAnimeById);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta http://localhost:${PORT}`)
});