let chances = 5;
document.getElementById('chances').innerText = chances;
const randomNumber = Math.floor(Math.random() * 50) + 1;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const message = document.getElementById('message');

    if (userGuess === '' || isNaN(userGuess)) {
        message.textContent = 'Por favor, insira um número válido.';
        return;
    }

    const guess = Number(userGuess);

    if (guess === randomNumber) {
        message.textContent = `Parabéns! Você acertou o número ${randomNumber}.`;
        message.style.color = 'green';
        document.getElementById('userGuess').disabled = true;
    } else {
        chances--;
        document.getElementById('chances').innerText = chances;

        if (chances === 0) {
            message.textContent = `Suas chances acabaram! O número correto era ${randomNumber}.`;
            message.style.color = 'red';
            document.getElementById('userGuess').disabled = true;
        } else {
            if (guess > randomNumber) {
                message.textContent = 'Número errado! Seu palpite é maior que o número correto. Tente novamente.';
            } else {
                message.textContent = 'Número errado! Seu palpite é menor que o número correto. Tente novamente.';
            }
            message.style.color = 'orange';
        }
    }

    // Limpa o campo de input
    document.getElementById('userGuess').value = '';
}
