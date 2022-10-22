// Game
const displayText = document.querySelector('.output--details h1'); 
const displayIcon = document.querySelectorAll('.moves-display__output img');
const moveButton = document.querySelectorAll('.game-buttons__move');

let playerScore = 0;
let enemyScore = 0;
let round = 0;

function roundCount() {
    round++;
    displayText.innerHTML = `Round ${round}`;
}

function enemyPlay() {
    let moves = ["Black Hole", "Star System", "Atom"];
    let enemyMove = moves[Math.floor(Math.random()*moves.length)];

    switch (true) {
        case (enemyMove == "Black Hole"):
            displayIcon[1].src = './images/black-hole.png'; 
            break;
        case (enemyMove == "Star System"):
            displayIcon[1].src = './images/orbit.png'; 
            break;
        case (enemyMove == "Atom"):
            displayIcon[1].src = './images/atom.png';
    }

    return enemyMove;
}

// Interface Animations
const images = document.querySelectorAll('img');

for (let i = 0; i < 3; i++){
    moveButton[i].addEventListener('mouseover', () => {
        images[i].classList.add('rotate');
    });

    images[i].addEventListener('animationend', () => {
        images[i].classList.remove('rotate');
    })
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