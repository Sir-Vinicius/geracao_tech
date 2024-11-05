const usersModel = require('../models/usersModel');

const userCreate = async (req, res, next) => {
    try {
        const newUser = await usersModel.create({
            first_name: req.body.first_name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        });
        console.log("Usuário criado com sucesso!: ",  newUser.id);
        res.status(201).send({
            message: `Usuário criado com sucesso!: ${newUser.id}`
        })
    } catch (error) {
        res.status(400).send({
            message: `Erro ao criar o usuário: ${error}`
        })
    }
};

const userList = async  (req, res, next) => {
    try {
        const usersList = await  usersModel.findAll();
        res.send(usersList)

    } catch (error) {
        res.send({
            message: 'Erro ao listar os usuários!'
        })
    }
};

module.exports = { 
    userCreate,
    userList
};