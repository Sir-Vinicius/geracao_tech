const soma = (num1, num2) => {
    try {
        const total = num1 + num2;
        return total;
    } catch (error) {
        return `Erro: ${error}`;
    }

};

const sub = (num1, num2) => {
    try {
        const total = num1 - num2;
        return total;
    } catch (error) {
        return `Erro: ${error}`;
    }

};

const mult = (num1, num2) => {
    try {
        const total = num1 * num2;
        return total;
    } catch (error) {
        return `Erro: ${error}`;
    }

};

const div = (num1, num2) => {
    try {
        const total = num1 / num2;
        return total;
    } catch (error) {
        return `Erro: ${error}`;
    }

};

module.exports = {
    soma,
    sub,
    mult,
    div
};