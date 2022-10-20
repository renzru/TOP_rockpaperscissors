var playerScore = 0;
var computerScore = 0;
var playerChoice;
var computerChoice;

playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();
checkScore();
checkWinner();

function getPlayerChoice() {
    // let playerMove = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();
    return playerMove[0].toUpperCase() + playerMove.slice(1);   
}

function getComputerChoice() {
    let moveArray = ["Rock", "Paper", "Scissors"];
    let moveRandom = Math.floor(Math.random()*moveArray.length);

    return moveArray[moveRandom];
}

function checkScore() {

    if (playerChoice == computerChoice){
        console.log(`It's a tie! Both played ${playerChoice}`);
        playerScore++;
        computerScore++;
        return;
    }

    if (playerChoice == "Rock"){
        if (computerChoice == "Scissors") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            return;
        }
    }

    else if (playerChoice == "Paper"){
        if (computerChoice == "Rock") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            return;
        }
    }

    else if (playerChoice == "Scissors"){
        if (computerChoice == "Paper") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            return;
        }
    }
        console.log(`Player Loses! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
}

function checkWinner() {
    
    if (playerScore == computerScore) {
        console.log(`Tie with ${playerScore} points!`);
    }

    else if (playerScore > computerScore) {
        console.log(`Player wins with ${playerScore} points! Computer loses with ${computerScore} points!`);
    }

    else {
        console.log(`Computer wins with ${computerScore} points! Player loses with ${playerScore} points!`);
    }
}

/*

for (let i = 0; i < 5; i++){
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    checkScore();
}

*/