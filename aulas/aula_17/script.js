// // let listaDevs = [
// //     {
// //         nome: "David",
// //         idade: 29,
// //         profissao: "DevFront",
// //         tecnologias: ["React", "Next", "TailWind"]
// //     },
// //     {
// //         nome: "Eduardo",
// //         idade: 22,
// //         profissao: "Dev Java",
// //         tecnologias: ["Spring", "Hibernate"]
// //     },
// //     {
// //         nome: "Bryan",
// //         idade: 25,
// //         profissao: "Dev Mobile",
// //         tecnologias: ["React-Native", "Styled-component", "TailWind"]
// //     }
// // ]

// // console.log(listaDevs)

// // for (let i = 0; i < listaDevs.length; i++) {
// //     console.log(`O desenvolvedores são ${listaDevs[i].nome}`)

// // }

// let menu
// let propeties = []


// while (menu != 3) {
//     // let propetiesFormat = propeties.join(', ')
//     menu = Number(prompt(`Welcome to Properties Register
//         Totaly of properties: ${propeties.length},
//          1 - New properties
//          2 - Listar properties
//          3 - End`
//     ))

//     switch (menu) {
//         case 1:
//             const name = prompt('Owner name:')
//             const room = prompt('Amount rooms:')
//             const bathroom = prompt('Amount bathrooms:')
//             let propertier = {name, room, bathroom}
//             propeties.push(propertier)
//             break
//         case 2:
//             let text = ""
//             propeties.forEach(propertier => {
//                 text+=(`Name: ${propertier.name},
//                     Rooms: ${propertier.room},
//                     Bathrooms: ${propertier.bathroom}\n`)
//             });
//             alert(text)
//             break
//         case 3:
//             alert('Encerrando')
//             break
//         default:
//             break
//     }
// }

function dobro(number){
    return number *= 2
}

numero = prompt('Digite um número: ')
alert(`O dobro de ${numero} é ${dobro(numero)}`)