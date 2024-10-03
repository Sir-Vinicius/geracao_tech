// function validarCampo(event) {
//     event.preventDefault()
//     let nomedDoProduto = document.getElementById('nome').value

//     if(nomedDoProduto){
//         nomedDoProduto.classList.add('is-invalid')
//     }
// }

function validarValor() {
    let nomedDoProduto = document.getElementById('nome')
    if(nomedDoProduto.value) {
        nomedDoProduto.classList.add('is-valid')
    }
}