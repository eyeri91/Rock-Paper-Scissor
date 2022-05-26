let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const choices = document.querySelectorAll('.choice');

getComputerChoice();

function getComputerChoice() {
    const options = ['r', 'p', 's'];
    const randomNum = (Math.floor(Math.random() * 3));
    return options[randomNum];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissor";
}

function win(user, computer) {
    const userChoiceDiv = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `User: ${convertToWord(user)} VS Computer: ${convertToWord(computer)}. You win!`;
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 500);
}

function lose(user, computer) {
    const userChoiceDiv = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `User: ${convertToWord(user)} VS Computer: ${convertToWord(computer)}. You lost!`;
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 500);
}

function draw(user, computer) {
    const userChoiceDiv = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(computer)} VS ${convertToWord(user)}. DRAW!`
    userChoiceDiv.classList.add('grey-glow');
    setTimeout(() => document.getElementById(user).classList.remove('grey-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

main();
function main() {
    choices.forEach(userChoice => userChoice.addEventListener('click', () =>
        game(userChoice.id)
    ));
}
