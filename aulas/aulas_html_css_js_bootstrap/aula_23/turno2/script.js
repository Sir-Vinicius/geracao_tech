async function fetchCep() {
    let cep = document.getElementById('cep').vale
    const url = `http://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function listarCep() {
    if (document.getElementById('cep').vale.length > 7) {
        const lista = await fetchCep()

        document.getElementById('logradouro').value = lista.logradouro
        document.getElementById('bairro').value = lista.bairro
        document.getElementById('localidade').value = lista.localidade
        document.getElementById('uf').value = lista.uf
    }
}

function busca(){
    listarCep()
}