async function media(n1: number, n2: number): Promise<string> {
    try {
        if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
            throw new Error('Os números devem ser inteiros.');
        }

        const media = (n1 + n2) / 2;
        const resto = (n1 + n2) % 2;

        if (resto !== 0) {
            return `A média é ${Math.round(media)} e o resto da soma é ${resto}.`;
        }

        return `A média é ${media}.`;
    } catch (error) {
        return `Erro: ${error.message}`;
    }
}

media(15, 5).then(result => console.log(result));
console.log('Hello');
