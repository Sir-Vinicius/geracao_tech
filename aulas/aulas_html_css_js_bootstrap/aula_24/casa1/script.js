let chances = 5;
document.getElementById('chances').innerText = chances;
const randomNumber = Math.floor(Math.random() * 50) + 1;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const message = document.getElementById('message');

    if (userGuess === '' || isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        message.textContent = 'Insira um número válido entre 1 e 50, você perdeu uma chance. Muahaha.';
        chances--;
        document.getElementById('chances').innerText = chances;
        return;
    }

    const guess = Number(userGuess);

    if (guess === randomNumber) {
        message.textContent = `Que sortudo! Você acertou o número ${randomNumber}.`;
        message.style.color = 'green';
        document.getElementById('userGuess').disabled = true;
    } else {
        chances--;
        document.getElementById('chances').innerText = chances;

        if (chances === 0) {
            message.textContent = `Suas chances acabaram! O número correto era ${randomNumber}. MORRAAA!!🔪🔫`;
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
