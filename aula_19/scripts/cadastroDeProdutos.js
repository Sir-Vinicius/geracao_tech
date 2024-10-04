let nomeProduto = document.getElementById('nome')
let valorProduto = document.getElementById('valor')
let quantidadeProduto = document.getElementById('quantidade')
let imagemProduto = document.getElementById('imagem')
let tableContent = document.getElementById('tableContent')
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
        <tr>
        <td>${item.id}</td>
        <td>${item.nome}</td>
        <td>${item.value}</td>
        <td>${item.value}</td>
        <td><img style="width: 100px; heigth: 100px;" src="${item.value}"></td>
        <td><button onclick="" type="button" class="btn btn-warning">Editar</button>
            <button onclick="Excluir(${i})" type="button" class="btn btn-danger">Excluir</button></td>
        </tr>
        `
    })
}

const CadastrarProduto = () => {
    produtos.push({id: id, nome: nome.value, valor: valor.value, quantidade: quantidade.value, imagem: imagem.value})
    id++
    renderProdutos()
}

const Editar = () => {

}

const Excluir = (i) => {
    event.preventDefault()
    produtos.splice(i, 1)
    renderProdutos()
}