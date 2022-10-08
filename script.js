playRound();

function playRound() {

    var playerChoice = getPlayerChoice();
    var computerChoice = getComputerChoice();

    var playerNum = getNumChoice(playerChoice);
    var computerNum = getNumChoice(computerChoice);

    if (playerNum == computerNum){
        console.log(`It's a tie! Both players picked ${playerChoice}`);
    } 

    else if (playerNum == 3 && computerNum == 1) {  // checks if player chose scissors and computer chose rock
        console.log(`Player Loses! ${computerChoice} beats ${playerChoice}`);
    }

    else if (playerNum == 1 && computerNum == 3) {  // checks if player chose rock and computer chose scissors
        console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
    }

    else if (playerNum > computerNum){
        console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
    } 
    
    else if (playerNum < computerNum) {
        console.log(`Player Loses! ${computerChoice} beats ${playerChoice}`);
    }
    
    else {
        alert("Invalid!");
    }
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

function getNumChoice(choice) {
    switch (choice) {
        case "Rock":
        choice = 1;
        break;

        case "Paper":
        choice = 2;
        break;

        case "Scissors":
        choice = 3;
        break;
    }

        return choice;
} 