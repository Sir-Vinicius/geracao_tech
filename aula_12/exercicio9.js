const valor_h = Number(prompt("Digite o valor em horas: "))
const h_trabalhadas =  Number(prompt("Digite as horas trabalhas: "))

const salario_bruto = h_trabalhadas * valor_h

if (salario_bruto = 900.00) {
    ir = salario_bruto
} else if ( salario_bruto >= 901.00 && salario_bruto <= 1500.00) {
    ir = salario_bruto * 0.05
} else if (salario_bruto >= 1501.00 && salario_bruto <= 2500.00) {
    ir = salario_bruto * 0.1
} else if (salario_bruto > 2500.00) {
    ir = salario_bruto *0.2
}

const inss = salario_bruto * 0.1

const fgts = salario_bruto * 0.2

const desconto = ir + inss

const salario_liquido = salario_bruto - desconto

console.log("Salario bruto: ", salario_bruto)
console.log("Descontos:\n", "IR(5%): ", ir, "\nINSS(10%): ", inss)
console.log("Total de descontos: ", desconto)
console.log("Salario liquido: ", salario_liquido)