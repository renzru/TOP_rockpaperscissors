var playerScore = 0;
var computerScore = 0;
var playerChoice;
var computerChoice;

for (let i = 0; i < 5; i++){
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    check();
}

checkWinner();

function getPlayerChoice() {
    var playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice;
}

function getComputerChoice() {
    var moveArray = ["Rock", "Paper", "Scissors"];
    var moveRandom = Math.floor(Math.random()*moveArray.length);

    return moveArray[moveRandom];
}

function check() {

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
        console.log(`Player wins with ${playerScore} points!`);
    }

    else {
        console.log(`Computer wins with ${computerScore} points!`);
    }
}