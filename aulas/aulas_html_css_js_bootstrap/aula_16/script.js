// // Aula de (Terça) 01.10.24


// // function soma(){

// // }


// // let lista = ["David", 2, true, soma(), undefined];


// // console.log(lista);




// let personagens = ['Frodo', 'Gendalf', 'Pippin', 'Aragorn', 'Legolas'];


// // Push : adiciona dados no final do array

// personagens.push('Boromir')

// console.log(personagens)

// // unshift: adiciona dados no inicio do array

// personagens.unshift('Sauron');

// console.log(personagens)


// // pop : retira o ultimo elemento do array

// personagens.pop('Boromir');
// console.log(personagens);

// // shift: retira o primeiro dado do array

// personagens.shift('Sauro');
// console.log(personagens)

// // include: verifica se um certo elemento está presente no array
// let procura = personagens.includes('Gendalf');

// console.log(procura)

// // indexOf: Procura indice do elemento no array
// let procuraIndice = personagens.indexOf('Frodo');

// personagens[1] = 'Gandolf o Cinzento';

// console.log(procuraIndice);

// console.log(personagens)


// let selecaoPersonagem = personagens.slice(0, 4);

// console.log(selecaoPersonagem)

// let outrasSelecao = personagens.slice(-4)

// console.log(personagens)
// console.log(outrasSelecao)

// // concat: Junta os arrays e os itens e devolve um array sem alterar os arrayes originais

// let personagens2 = ["Fheanor", "Fingolfin"]

// let arrayConcat = personagens.concat(personagens2)

// console.log(arrayConcat)

// // join: Ele junta os elementos de acordo com o que a gente passa como argumento

// let juntarCom = arrayConcat.join(' - ')

// console.log(juntarCom)

// let personagens = ['Frodo', 'Gendalf', 'Pippin', 'Aragorn', 'Legolas'];
// for(let indice = 0; indice < personagens.length; indice++) {
//     let elemento = personagens[indice]
//     console.log(`O personagem ${elemento} está no indice ${indice}`)
// }

// let pacientes = []
// let menu

// while (menu != 3) {
//     let pacFormat = pacientes.join(', ')
//     menu = Number(prompt(`Escolha uma opção:
//         Paicentes: ${pacFormat},
//          1 - Novo paciente
//          2 - Remover primeiro paciente
//          3 - Encerrar`
//     ))

//     switch (menu) {
//         case 1:
//             novo_paciente = prompt('Digite o nome do paciente')
//             pacientes.push(novo_paciente)
//             break
//         case 2:
//             remover = pacientes.shift()
//             if(!remover){
//                 alert('Não existe paciente na fila!!!')
//             }else{
//                 alert(`Usuario ${remover} removido com sucesso!`)
//             }
//             break
//         case 3:
//             alert('Encerrando')
//             break
//         default:
//             break
//     }
// }

let lista = {
    nome: "Rex",
    idade: 6,
    tipo: "Cachorro"
}

console.log(lista)
console.log(lista.nome)