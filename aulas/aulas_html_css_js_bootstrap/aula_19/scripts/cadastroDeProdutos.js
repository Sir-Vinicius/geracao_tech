let nomeProduto = document.getElementById('nome')
let valorProduto = document.getElementById('valor')
let quantidadeProduto = document.getElementById('quantidade')
let imagemProduto = document.getElementById('imagem')
let id = 1
let produtos = []

const validador = (input) => {
    if(input.value.length !== 0) {
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')
    } else {
        input.classList.remove('is-valid')
        input.classList.add('is-invalid')
    }
}

const validarDados = () => {
    event.preventDefault();

    validador(nomeProduto)
    validador(valorProduto)
    validador(quantidadeProduto)
    validador(imagemProduto)

}

const renderProdutos = () => {
    let tableContent = document.getElementById('tableContent')
    tableContent.innerHTML = ``

    produtos.map((item, i) => {
        tableContent.innerHTML +=
        `
        <tr id="linha-${item.id}">
        <td>${item.id}</td>
        <td>${item.nome}</td>
        <td>${item.valor}</td>
        <td>${item.quantidade}</td>
        <td><img style="width: 100px; heigth: 100px;" src="${item.imagem}"></td>
        <td><button onclick="editar(${item.id})" type="button" class="btn btn-warning">Editar</button>
            <button onclick="excluir(${item.id})" type="button" class="btn btn-danger">Excluir</button></td>
        </tr>
        `
    })
}

const CadastrarProduto = () => {
    produtos.push({id: id, nome: nome.value, valor: valor.value, quantidade: quantidade.value, imagem: imagem.value})
    id++
    renderProdutos()
}

const editar = (id) => {
    produtos = produtos.map((item) => {
        if (item.id === id) {
            return {
                id: id,
                nome: nome.value,
                valor: valor.value,
                quantidade: quantidade.value,
                imagem: imagem.value
            };
        }
        return item; 
    });

    renderProdutos();
}

const excluir = (id) => {
    produtos = produtos.filter((item => item.id != id))

    const linha = document.getElementById(`linha-${id}`)
    if(linha) {
        linha.remove()
    }    
}