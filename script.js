// Interface Code

const images = document.querySelectorAll('img');

images.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.classList.add('rotate');
    });

    img.addEventListener('mouseout', () => {
        setTimeout(() => {
            img.classList.remove('rotate')
        }, 1750);
    })
})

// Code for Rock Paper Scissors
var playerScore = 0;
var computerScore = 0;
var roundCounter = 0;
var playerChoice;
var computerChoice;


const buttons = document.querySelectorAll('#body-container button');
const rockButton = document.querySelector('#button-rock');
const paperButton = document.querySelector('#button-paper');
const scissorsButton = document.querySelector('#button-scissors');

rockButton.addEventListener('click', function moveRock() {
    playerChoice = "Rock";
})

paperButton.addEventListener('click', function movePaper() {
    playerChoice = "Paper";
})

scissorsButton.addEventListener('click', function moveScissors() {
    playerChoice = "Scissors";
})

buttons.forEach((button) => {
    button.addEventListener('click', function buttonScore() {
        computerChoice = getComputerChoice();
        roundCounter++;
        checkScore();
    });
})

function getComputerChoice() {
    let moveArray = ["Rock", "Paper", "Scissors"];
    let moveRandom = Math.floor(Math.random()*moveArray.length);

    return moveArray[moveRandom];
}

function checkScore() {

    if (roundCounter == 5) {
        checkWinner();
    }

    if (roundCounter > 4) {
        return;
    }

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
