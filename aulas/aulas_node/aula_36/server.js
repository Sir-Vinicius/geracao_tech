const express = require('express');
const app = express();
const produtos = [
    {
        "id": 1,
        "nome": "Nike 360",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/08/21/22_10_44_549_tenis_nike_air_vapormax_360_racer_blue_1613_1_078c6835ff714b6f499b2e182c3d1fb8_20210812081446.png?v=1692666644",
        "Descricao": "Nike 360 - Branco e Azul",
        "preco": 299.50
    },
    {
        "id": 2,
        "nome": "Puma Flyer",
        "imagem": "https://images.tcdn.com.br/img/img_prod/311840/tenis_puma_flyer_runner_mesh_bdp_feminino_preto_119322_6_44ae5f31e723774d8941ff5736568728.png",
        "Descricao": "Puma - Preto",
        "preco": 399.90
    },
    {
        "id": 3,
        "nome": "Adibas",
        "imagem": "https://images.tcdn.com.br/img/img_prod/311840/tenis_adidas_response_runner_azul_e_preto_114793_6_a9135d0fb1adf94853df1dc720cb4e83.png",
        "Descricao": "Adibas - Azul",
        "preco": 99.90
    }
];

app.get('/', (req, res) => {
    res.send('Health Check')
});

app.get('/home', (req, res) => {
    res.send('Hello World')
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

const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
});