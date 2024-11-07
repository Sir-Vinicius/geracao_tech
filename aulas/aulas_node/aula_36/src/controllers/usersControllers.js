const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');

const userCreate = async (req, res) => {
    // Constantes de entrada de dados
    const { nome, sobrenome, email, senha } = req.body;
    
    // Criptografia da senha enviada no body
    const saltRounds = 10;
    const senhaHast = await bcrypt.hash(senha, saltRounds);

    // Criando um novo usuário
    const newUser = await usersModel.create({   
        first_name: nome,
        surname: sobrenome,
        email: email,
        password: senha
    });
    // Resposta da requisição
    res.status(201).send({
        message: `🟢 Usuário ${newUser.first_name}, ID: ${newUser.id} criado com sucesso!`
    });
};

const usersGetAll = async (req, res) => {
    try {
        const usersList = await usersModel.findAll();
        res.send(usersList)

    } catch (error) {
        res.send({
            message: 'Erro ao listar os usuários!'
        })
    }
};

const userUpdateById = async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await usersModel.findByPk(id);
    try {
        if (user) {
            await usersModel.update(
                { ...req.body },
                { where: { id: id } }
            );
    
            res.status(201).send({
                message: `🟢 Usuário de ID ${id} foi alterado com sucesso! 😁👍`
            });
        } else {
            res.status(400).send({
                message: `🔴 Usuário não encontrado! 😰`
            })
        }
    } catch (error) {
        res.send({
            message: '❌ Erro ao alterar o usuário!'
        })
    };
};

const userDeleteById = async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await usersModel.findByPk(id);
    try {
        if (user) {
            await user.destroy();
    
            res.status(201).send({
                message: `🟢 Usuário de ID ${id} foi deletado com sucesso! 😁👍`
            });
        } else {
            res.status(400).send({
                message: `🔴 Usuário não encontrado! 😰`
            })
        }
    } catch (error) {
        res.send({
            message: '❌ Erro ao alterar o usuário!'
        })
    };
};

module.exports = {
    userCreate,
    usersGetAll,
    userUpdateById,
    userDeleteById
};