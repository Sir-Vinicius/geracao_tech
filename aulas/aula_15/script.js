// nome = prompt('Qual seu nome?')
// visita = prompt('Você visitou alguma cidade?(s/n)')
// qt_cidades = 0
// cidades = ''

// while(visita == 's'){
//     cidade = prompt('Digite o nome da cidade')
//     cidades += '\n' + '-' + cidade
//     qt_cidades++
//     visita = prompt('Você visitou alguma outra cidade?(s/n)')
// }

// alert(`o turista ${nome}, visitou ${qt_cidades} cidades, que são: ${cidades}`)

// -------------------------------------------------------------------------------------------------------------------------------

// pares = ''
// impares = ''
// mult3 = ''
// mult5 = ''
// mult7 = ''
// for(x = 0; x <= 100; x++) {
//     if(x % 2 == 0){
//         par = x
//         pares += ' ' + par
//     }else{
//         impar = x
//         impares += ' ' + impar
//     }
//     if(x % 3 == 0) {
//         m3 = x
//         mult3 += ' ' + m3
//     }
//     if(x % 5 == 0) {
//         m5 = x
//         mult5 += ' ' + m5
//     }
//     if(x % 7 == 0) {
//         m7 = x
//         mult7 += ' ' + m7
//     }
// }

// console.log(`Números pares: ${pares}`)
// console.log(`Números impares: ${impares}`)
// console.log(`Números multiplo de 3: ${mult3}`)
// console.log(`Números multiplo de 5: ${mult5}`)
// console.log(`Números multiplo de 7: ${mult7}`)

// -------------------------------------------------------------------------------------------------------------------------------
tela = 0

num = {
    1 : 'foi um',
    2 : 'foi dois',
    3 : 'foi três',
    4 : 'foi quatro',
    5 : 'foi cinco'
}
while(tela !=5) {
    tela = Number(prompt('Escolha uma opção' + '\n' +
        '1 - primeira opção' +
        '2 - primeira opção' +
        '3 - primeira opção' +
        '4 - primeira opção' +
        '5 - Encerra'
    ))

    switch (tela) {
        case 1:
        case 2:
        case 3:
        case 4:
            alert(num[tela]); // Mostra a opção escolhida
            break;
        case 5:
            alert('Encerrando...');
            break;
        default:
            alert('Opção inválida, tente novamente.');
            break;
    }
}