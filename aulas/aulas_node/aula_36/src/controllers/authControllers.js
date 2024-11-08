// const users = require('../mocks/userList')
const usersModel = required('../models/usersModel');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/dotenvConfig');

const loginAuth = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersModel.findOne({ where: {email} });

        const userPassword = user ? user.password : '';
        const hashValid = await bcrypt.compare(password, userPassword);

        if (hashValid) {
            const token = jwt.sign({ id: user.id, name: user.name }, jwtSecret, { expiresIn: '3h' });
            res.send({
                sucess: true,
                token: token,
                message: 'Login realizado com sucesso!!! 👌' 
            })
        } else {
            res.send({
                sucess: false,
                token: '',
                message: 'Usuário ou senha inválidos!!! 👀'

            })
        }
    } catch (error) {
        res.send(`Falha na requisição ${error}!!!`)
    }
}

module.exports = {
    loginAuth
}