const ListaAnimes = require('../mocks/animeList')

function middlewareCreateAnime(req, res, next) {

}

function middlewareUpdateAnime(req, res, next) {

}

function middlewareDeleteAnime(req, res, next) {
    const { id } = req.params;
    const animeIndex = ListaAnimes.findIndex(anime => anime.id === Number(id));
    try {
        if (!animeIndex === -1) {
            return res.send({ mensage: '🔴 Anime não encontrado! 😰' })
        };
        next();
    } catch (error) {
        res.send({message: `Algo de errado aconteceu: ${error}`})
    }
}

module.exports = {
    middlewareCreateAnime,
    middlewareUpdateAnime,
    middlewareDeleteAnime
}