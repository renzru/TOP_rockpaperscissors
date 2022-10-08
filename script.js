playRound();

function playRound() {

    var playerChoice = getPlayerChoice();
    var computerChoice = getComputerChoice();

}

function getPlayerChoice() {
    var playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice;
}

function getComputerChoice() {
    var moveArray = ['Rock', 'Paper', 'Scissors'];
    var moveRandom = Math.floor(Math.random()*moveArray.length);

    return moveArray[moveRandom];
}