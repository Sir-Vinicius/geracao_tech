# Cálculo de Folha de Pagamento

Este script realiza o cálculo da folha de pagamento, considerando os seguintes descontos:

- **Imposto de Renda (IR)**: depende do salário bruto conforme a tabela abaixo.
- **INSS**: 10% do salário bruto.
- **FGTS**: 11% do salário bruto (não é descontado do salário, mas depositado pela empresa).

## Desconto do IR

- Salário Bruto até R$ 900,00: isento
- Salário Bruto de R$ 901,00 até R$ 1500,00: 5%
- Salário Bruto de R$ 1501,00 até R$ 2500,00: 10%
- Salário Bruto acima de R$ 2500,00: 20%

## Instruções

O script solicitará ao usuário o valor da hora e a quantidade de horas trabalhadas no mês. A seguir, as informações serão apresentadas no formato:

### Exemplo

Se o valor da hora for R$ 5,00 e a quantidade de horas trabalhadas for 220:

- **Salário Bruto**: R$ 1100,00 (5 * 220)
- **Descontos**:
  - IR (5%): R$ 55,00
  - INSS (10%): R$ 110,00
- **Total de Descontos**: R$ 165,00
- **Salário Líquido**: R$ 935,00