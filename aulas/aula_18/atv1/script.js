
// DOCUMENTO OBJECT MODEL

// Conseguir tratar o documento como se fosse um objeto

// Manipular melhor os elementos da tela


// Uma forma de selecionar o elemento pelo ID
// NodeList 
let conteudo = document.getElementById('card')
let paragrafo = document.getElementsByTagName('p')
let selecionar = document.getElementsByClassName('cardSection')

let navegacao = document.querySelector('#menu')
let menu = document.querySelectorAll('.conteudoMenu > a')

let cabecalho = document.getElementById('header')

let conteudoSection = document.getElementById('conteudoNovo')

console.log(conteudo)
console.log(paragrafo)
console.log(typeof conteudo)

console.log(selecionar)

console.log(navegacao)

console.log(typeof navegacao)

console.log(menu)

menu.forEach((item) => {
    console.log(item)
});

function show() {
    alert(`Você clicou aqui!`)
    cabecalho.classList.add('novoCard')
}

function addCardVermelho() {
    conteudoSection.innerHTML =
    `<span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, eius molestias voluptates, sequi sapiente fuga ratione exercitationem consequatur obcaecati blanditiis officia, animi voluptate? Quos, velit explicabo? Laboriosam tenetur eligendi eveniet.
    </span>`
    conteudoSection.classList.add('CardVermelho')
}