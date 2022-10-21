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

function computerMove() {
    let moveArray = ["Black Hole", "Star System", "Atom"];
    let moveRandom = Math.floor(Math.random()*moveArray.length);

    return moveArray[moveRandom];
}

function countRound() {
    roundCounter++;
    
}











/* OLD CODE
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

const scoreContainer = document.querySelector('#score-container');
const playerScoreWrapper = document.querySelector('#playerDisplay');
const computerScoreWrapper = document.querySelector('#computerDisplay');

const tiemovesContainer = document.getElementById('tie-moves');
const playermovesContainer = document.getElementById('player-moves');
const computermovesContainer = document.getElementById('computer-moves');

function checkScore() {

    if (roundCounter == 5) {
        checkWinner();
    }

    if (roundCounter > 5) {
        return;
    }

    if (playerChoice == computerChoice){
        console.log(`It's a tie! Both played ${playerChoice}`);
        playerScore++;
        computerScore++;
        tiemovesContainer.appendChild(blackholeDisplay);
        playerScoreWrapper.textContent = `${playerScore}`;
        computerScoreWrapper.textContent = `${computerScore}`;
        return;
    }

    if (playerChoice == "Rock"){
        if (computerChoice == "Scissors") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            playerScoreWrapper.textContent = `${playerScore}`;
            return;
        }
    }

    else if (playerChoice == "Paper"){
        if (computerChoice == "Rock") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            playermovesContainer.removeChild(playermovesContainer.lastElementChild);
            computermovesContainer.removeChild(computermovesContainer.lastElementChild);
            playermovesContainer.appendChild(starsystemDisplay);
            computermovesContainer.appendChild(blackholeDisplay );
            playerScoreWrapper.textContent = `${playerScore}`;
            return;
        }
    }

    else if (playerChoice == "Scissors"){
        if (computerChoice == "Paper") {
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            playermovesContainer.removeChild(playermovesContainer.lastElementChild);
            computermovesContainer.removeChild(computermovesContainer.lastElementChild);
            playermovesContainer.appendChild(atomDisplay);
            computermovesContainer.appendChild(starsystemDisplay);
            playerScoreWrapper.textContent = `${playerScore}`;
            return;
        }
    }
        console.log(`Player Loses! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
        computerScoreWrapper.textContent = `${computerScore}`;
}

function checkWinner() {

    const tieScoreDisplay = document.createTextNode(`Tie!`);
    const playerScoreDisplay = document.createTextNode(`Player Wins!`);
    const computerScoreDisplay = document.createTextNode(`Computer Wins!`);
    
    if (playerScore == computerScore) {
        scoreContainer.appendChild(tieScoreDisplay);
    }

    else if (playerScore > computerScore) {
        scoreContainer.appendChild(playerScoreDisplay);
    }

    else {
        computerScoreDisplay.appendChild(computerScoreDisplay);
    }
}
*/