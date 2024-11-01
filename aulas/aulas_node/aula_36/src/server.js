const express = require('express');
const app = express();
const PORT = 3000;
const produtos = require('../src/mocs/sneakersList');
const snearkersController = require('./controllers/sneakersControllers');
const animeController = require('./controllers/animeControllers');
const { JsonWebTokenError } = require('jsonwebtoken');
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

// // Importando JWT
// const jwt = require('jsonwebtoken')
// // Criando Token assinado
// const token = jwt.sign({id: 15, name: 'Vinicius'}, 'f23mi%T2')
// // Exibindo token
// console.log(token)

// const jwtVerify = (tokenUSer) => {
//     try{
//         const decoded = jwt.verify(tokenUSer, 'f23mi%T2')
//         return decoded
//     } catch (error){
//         console.log(`Deu ruim! ${error}`)
//     }
// }

// console.log(jwtVerify(token))

app.post('/login', (req, res) => {
    try{
        const jwt =  require('jsonwebtoken')
        const email = req.body.email
        const senha = req.body.senha

        const emailUser = 'vini@bol.com'
        const senhaUser =  '123456'

        
        if (email === emailUser && senha === senhaUser) {
            const token = jwt.sign({id: 17, name: 'Vinicius'}, 'f23mi%T2')
            res.send({
                sucess: true,
                token:  token,
                message: 'Login realizado com sucesso!!! 👌'

            })
        } else {
            res.send({
                sucess: true,
                token:  '',
                message: 'Usuário ou senha inválidos!!! 👀'

            })
        }
    }catch (error){
        res.send({
            sucess: false,
            token:  '',
            message: `Falha na requisição ${error}!!!`

        })
    }

})

app.get('/produtos', snearkersController.getsneakers);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta http://localhost:${PORT}`)
});