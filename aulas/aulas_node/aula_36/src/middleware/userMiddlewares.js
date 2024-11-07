const middlewareCreateNewUser = (req, res, next) => {
    const { nome, sobrenome, email, senha } = req.body;
    try {
        if (!nome ||  !sobrenome || !email || !senha) {
            res.status(400).send({
                message: `❌ Os dados fornecidos estão incompletos, Por favor , preencha todos os campos.`
            })
        }
        next();
    } catch (error) {
        res.status(400).send({
            message: `🔴 Erro ao criar o usuário: ${error}`
        })
    }
};

module.exports = {
    middlewareCreateNewUser
};