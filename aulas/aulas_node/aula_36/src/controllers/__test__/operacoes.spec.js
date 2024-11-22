const operacoes = require('../operacoesController')

test('2 + 3 o resultado será 3', () => {
    const resultado = 5;
    expect(operacoes.soma(2,3)).toBe(resultado);
})

test('2 - 3 o resultado será 1', () => {
    const resultado = -1;
    expect(operacoes.sub(2,3)).toBe(resultado);
})

test('2 * 3 o resultado será 6', () => {
    const resultado = 6;
    expect(operacoes.mult(2,3)).toBe(resultado);
})

test('4 / 2 o resultado será 2', () => {
    const resultado = 2;
    expect(operacoes.div(4,2)).toBe(resultado);
})