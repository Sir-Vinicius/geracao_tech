let num1 = Number(prompt('Primeiro número: '))
let num2 = Number(prompt('Segundo número: '))
let num3 = Number(prompt('Terceiro número: '))

let maior = num1

if (num2 >= num1 && num2 >= num3) {
    maior = num2
} else if (num3 >= num1 && num3 >= num2) {
    maior = num3
}

console.log('Maior: ', maior)