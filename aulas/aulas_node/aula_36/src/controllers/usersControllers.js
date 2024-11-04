const userCreate = async  (req, res, next) => {
    try {
        let = []
        res.send({
            message: 'Usuário criado com sucesso!'
        })
    } catch (error) {
        res.send({
            message: 'Erro ao criar o usuário'
        })
    }
}

const userList = async  (req, res, next) => {
    try {
        res.send({
            users: [
                {id: 1, name: 'David'},
                {id: 2, name: 'João'},
                {id: 3, name: 'Maria'}
            ]
        })
    } catch (error) {
        res.send({
            message: 'Erro ao listar os usuários!'
        })
    }
}

module.exports = { 
    userCreate,
    userList
};