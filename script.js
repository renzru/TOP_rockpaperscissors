// Game
const roundText = document.querySelector('.output__details h1'); 
const battleText = document.querySelector('.output__details p'); 
const battleScore = document.querySelectorAll('.battle-score');
const displayIcon = document.querySelectorAll('.moves-display__output img');
const displayBox = document.querySelectorAll('.moves-display__output');
const moveButton = document.querySelectorAll('.game-buttons__move');

let playerScore = 0;
let enemyScore = 0;
let round = 0;
let moves = ["Black Hole", "Star System", "Atom"];

function roundCount() {
    round++;
    roundText.innerHTML = `Round ${round}`;
}

function updateScore() {
    battleScore[0].innerHTML = `${playerScore}`;
    battleScore[1].innerHTML = `${enemyScore}`;
}

function enemyPlay() {
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

function checkScore(playerMove, enemyMove) {
    switch (true) {
        case (playerMove == enemyMove):
            battleText.innerHTML = `Woah! Both unleashed ${playerMove}s, so it's a Tie!`;
            displayBox[0].classList.add('highlight--tie');
            displayBox[1].classList.add('highlight--tie');
            battleText.classList.add('text--grow');
            playerScore++;
            enemyScore++;
            break;  
        case (playerMove == "Black Hole" && enemyMove == "Atom"):
            battleText.innerHTML = "Your Black Hole spaghettifies the enemy Atom!";
            displayBox[0].classList.add('highlight--player');
            playerScore++;
            break;
        case (playerMove == "Star System" && enemyMove == "Black Hole"):
            battleText.innerHTML = "Your Star System breaks physics and evaporates the enemy Black Hole!";
            displayBox[0].classList.add('highlight--player');
            playerScore++;
            break;
            
        case (playerMove == "Atom" && enemyMove == "Star System"):
            battleText.innerHTML = "Your Atom causes nuclear devastation on the enemy Star System!";
            displayBox[0].classList.add('highlight--player');
            playerScore++;
            break;

        case (enemyMove == "Black Hole" && playerMove == "Atom"):
            battleText.innerHTML = "Enemy Black Hole consumes your Atom into its singularity!";
            displayBox[1].classList.add('highlight--enemy');
            battleText.classList.add('text--shake');
            enemyScore++;
            break;

        case (enemyMove == "Star System" && playerMove == "Black Hole"):;
            battleText.innerHTML = "Enemy Star System's Civilization finds a way to defeat your Black Hole!";
            displayBox[1].classList.add('highlight--enemy');
            battleText.classList.add('text--shake');
            enemyScore++;
            break;
                
        case (enemyMove == "Atom" && playerMove == "Star System"):
            battleText.innerHTML = "Enemy Atom causes nuclear devastation on YOUR Star System!";
            displayBox[1].classList.add('highlight--enemy');
            battleText.classList.add('text--shake');
            enemyScore++;
            break;
    }
}

function roundPlay() {
    let playerMove;
    let enemyMove;

    for (let i = 0; i < 3; i++){
        moveButton[i].addEventListener('click', () => {
            playerMove = moves[i];
            switch (true) {
                case (playerMove == "Black Hole"):
                    displayIcon[0].src = './images/black-hole.png'; 
                    break;
                case (playerMove == "Star System"):
                    displayIcon[0].src = './images/orbit.png'; 
                    break;
                case (playerMove == "Atom"):
                    displayIcon[0].src = './images/atom.png';
                }

            enemyMove = enemyPlay();
            checkScore(playerMove, enemyMove);
            roundCount();
            updateScore();
        });
    }
}

roundPlay();

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

battleText.addEventListener('animationend', () => {
    battleText.classList.remove('text--shake');
    battleText.classList.remove('text--grow');
});


displayBox[0].addEventListener('animationend', () => {
    displayBox[0].classList.remove('highlight--player')
    displayBox[0].classList.remove('highlight--tie')
});

displayBox[1].addEventListener('animationend', () => {
    displayBox[1].classList.remove('highlight--enemy')
    displayBox[1].classList.remove('highlight--tie')
});







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