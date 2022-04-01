
const optionBtns = document.querySelectorAll('.options');
const comBoard = document.querySelector('.com.score');
const myBoard = document.querySelector('.player.score');
const leftGame = document.querySelector('.game.left');
const winAnnounce = document.querySelector('.winner');
const currentGame = document.querySelector('.current');

optionBtns.forEach(button => { button.addEventListener('click', getPlayerSelect) });


const options = ['Rock', 'Paper', 'Scissor']

let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    // Randomly choose the computer's option from the options array.
    let computerChoice =
        options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function updateScore(computerScore, playerScore) {
    let comScore = 'Computer: ' + computerScore;
    let myScore = 'Player: ' + playerScore;
    comBoard.textContent = comScore;
    myBoard.textContent = myScore;
}


function playRound(comSelect, playerSelect) {
    if (comSelect == playerSelect) {
        currentGame.textContent = 'Draw!'
        // updateScore(computerScore, playerScore);
    } else if (comSelect == 'Rock' && playerSelect == 'Paper' ||
        comSelect == 'Paper' && playerSelect == 'Scissor' ||
        comSelect == 'Scissor' && playerSelect == 'Rock') {
        playerScore += 1;
        // updateScore(computerScore, playerScore);
        currentGame.textContent = 'Player won!'
    } else {
        computerScore += 1;
        // updateScore(computerScore, playerScore);
        currentGame.textContent = 'Computer won!'
    }
    updateScore(computerScore, playerScore);
    // updateWinner(computerScore, playerScore);
}

function leftGameUpdate(totalRound) {
    leftGame.textContent = totalRound;
}

function updateWinner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        winAnnounce.textContent = 'You lost. Try again!'
    } else {
        winAnnounce.textContent = 'You won! Well done!'
    }
}

// function game(totalRound = 5) {
//     let gamePlayed = 0;
//     while (gamePlayed < totalRound) {
//         // let player = prompt('Rock, paper or scissor?!')
//         // let computer = computerPlay();

//         // player = capitalizeUserInput(player);
//         // result = playRound(computer, player);

//         if (result == 'win') {
//             console.log(`${player} beats ${computer}, you won.`);
//         } else if (result == 'lose') {
//             console.log(`${computer} beats ${player}, you lost.`);
//         } else {
//             console.log('Draw!');
//         }
//         totalRound--;
//     }
//     displayGameResult(computerScore, playerScore);
// }


function displayGameResult(computerScore, playerScore) {
    if (computerScore > playerScore) {
        console.log(`${computerScore}:${playerScore} You lost.`);
    } else if (playerScore > computerScore) {
        console.log(`${computerScore}:${playerScore} You won.`);
    } else {
        console.log(`${computerScore}:${playerScore} Record Tie!`);
    }
}



function getPlayerSelect(e) {
    let comSelect = computerPlay()
    let playerSelect = e.target.textContent;
    playRound(comSelect, playerSelect);
}



// game(1);


// function capitalizeUserInput(playerInput) {
//     // Turn user input to a capitalized string.
//     playerInput = playerInput[0].toUpperCase()
//         + playerInput.slice(1).toLowerCase();
//     return playerInput;
// }


