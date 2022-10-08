playRound();

function playRound() {

    var playerChoice = getPlayerChoice();
    var computerChoice = getComputerChoice();

    if (playerChoice == computerChoice){
        console.log(`It's a tie! Both played ${playerChoice}`);
        return;
    }

    if (playerChoice == "Rock"){
        if (computerChoice == "Scissors") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            return;
        }
    }

    else if (playerChoice == "Paper"){
        if (computerChoice == "Rock") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            return;
        }
    }

    else if (playerChoice == "Scissors"){
        if (computerChoice == "Paper") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            return;
        }
    }
    
        console.log(`Player Loses! ${computerChoice} beats ${playerChoice}`);
}

function getPlayerChoice() {
    var playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice;
}

function getComputerChoice() {
    var moveArray = ["Rock", "Paper", "Scissors"];
    var moveRandom = Math.floor(Math.random()*moveArray.length);

    return moveArray[moveRandom];
}
