const options = ['Rock', 'Paper', 'Scissor']

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    // Randomly choose the computer's option from the options array.
    let computerChoice = 
        options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

function capitalizeUserInput(playerInput) {
    // Turn user input to a capitalized string.
    playerInput = playerInput[0].toUpperCase()
    + playerInput.slice(1).toLowerCase();
    return playerInput;
}

function playRound(comSelect, playerSelect) {
    // Create a variable to return the result.
    let result;

    // If result is tie, return draw.
    if (comSelect == playerSelect) {
        return result = "draw";
    // If User wins, increment the user score and return win.
    } else if (comSelect == 'Rock' && playerSelect == 'Paper' ||
               comSelect == 'Paper' && playerSelect == 'Scissor' ||
               comSelect == 'Scissor' && playerSelect == 'Rock') {
        playerScore += 1;
        return result = "win"; 
    // If Computer wins, increment the computer score and return lose.           
    } else {
        computerScore += 1;
        return result = "lose";
    }
}

function game(totalRound = 5) { 
    let gamePlayed = 0;
    while (gamePlayed < totalRound) {
        let player = prompt('Rock, paper or scissor?!')
        let computer = computerPlay();

        player = capitalizeUserInput(player);
        result = playRound(computer,player);

        if (result == 'win') {
            console.log(`${player} beats ${computer}, you won.`);
        } else if (result == 'lose') {
            console.log(`${computer} beats ${player}, you lost.`);
        } else {
            console.log('Draw!');
        }
        gamePlayed ++;
    }
   displayGameResult(computerScore, playerScore);
}


function displayGameResult(computerScore, playerScore) {
    if (computerScore > playerScore) {
        console.log(`${computerScore}:${playerScore} You lost.`);
    } else if (playerScore > computerScore) {
        console.log(`${computerScore}:${playerScore} You won.`);
    } else {
        console.log(`${computerScore}:${playerScore} Record Tie!`);
    }
}


game(5);

