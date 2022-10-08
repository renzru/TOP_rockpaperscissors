playRound();

function playRound() {

    var playerChoice = getPlayerChoice();
    var computerChoice = getComputerChoice();

    check(playerChoice, computerChoice);
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

function check(move1, move2) {

    if (move1 == move2){
        console.log(`It's a tie! Both played ${move1}`);
        return;
    }

    if (move1 == "Rock"){
        if (computerChoice == "Scissors") {
            console.log(`Player Wins! ${move1} beats ${move2}`);
            return;
        }
    }

    else if (move1 == "Paper"){
        if (move2 == "Rock") {
            console.log(`Player Wins! ${move1} beats ${move2}`);
            return;
        }
    }

    else if (move1 == "Scissors"){
        if (move2 == "Paper") {
            console.log(`Player Wins! ${move1} beats ${move2}`);
            return;
        }
    }
    
        console.log(`Player Loses! ${move2} beats ${move1}`);
}