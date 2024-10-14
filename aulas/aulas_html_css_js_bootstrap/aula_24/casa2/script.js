const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const computerChoiceImg = document.getElementById('computer-choice-img');

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', function() {
        const playerChoice = this.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);

        updateComputerChoiceImage(computerChoice);
        updateScores(winner);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateComputerChoiceImage(computerChoice) {
    computerChoiceImg.src = `images/${computerChoice}.png`;
}

function updateScores(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreElem.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElem.textContent = computerScore;
    }
}