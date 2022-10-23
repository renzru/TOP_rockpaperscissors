// Game
const roundText = document.querySelector('.output__details h1'); 
const battleText = document.querySelector('.output__details p'); 
const battleScore = document.querySelectorAll('.battle-score');
const displayIcon = document.querySelectorAll('.moves-display__output img');
const displayBox = document.querySelectorAll('.moves-display__output');
const moveButton = document.querySelectorAll('.game-buttons__move');
const startModal = document.querySelector('.start-modal');
const restartModal = document.querySelector('.restart-modal');
const restartButton = document.querySelector('.restart-modal__button');
const restartScore = document.querySelector('.restart-modal__score')

const enemyDamage = new Audio('./audio/enemyaudio--damaged.wav');
const playerDamage = new Audio('./audio/playeraudio--damaged.wav');
const battleTie = new Audio('./audio/battleaudio--tie.wav');
const battleTie2 = new Audio('./audio/battleaudio--tie2.wav');
const battleWin = new Audio('./audio/battleaudio--win.wav');
const battleLose = new Audio ('./audio/battleaudio--lose.wav');

let playerScore = 0;
let enemyScore = 0;
let roundTotal = 25;
let round = 0;
let moves = ["Black Hole", "Star System", "Atom"];

function roundCount() {
    round++;
    roundText.innerHTML = `Round ${round}`;
    if (round > roundTotal-1){
        battleText.innerHTML = `${winnerCheck()}`;
        moveButton.forEach((button), () => {
            button.removeEventListener('click', e());
        })
        
        return;
    }
}

function winnerCheck() {
    switch (true) {
        case (playerScore == enemyScore): 
            battleTie2.play();
            return "It's a Tie!";

        case (playerScore > enemyScore): 
            battleWin.play();
            return "Player Wins!";
        
        case (playerScore < enemyScore): 
            battleLose.play();
            return "Enemy Wins!";
    }
    
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
    playerDamage.currentTime = 0;
    enemyDamage.currentTime = 0;
    battleTie.currentTime = 0;
    
    switch (true) {
        case (playerMove == enemyMove):
            battleTie.play();
            battleText.innerHTML = `Woah! Both unleashed ${playerMove}s, so it's a Tie!`;
            displayBox[0].classList.add('highlight--tie');
            displayBox[1].classList.add('highlight--tie');
            battleText.classList.add('text--grow');
            playerScore++;
            enemyScore++;
            break;  
        case (playerMove == "Black Hole" && enemyMove == "Atom"):
            enemyDamage.play();
            battleText.innerHTML = "Your Black Hole spaghettifies the enemy Atom!";
            displayBox[1].classList.add('highlight--damage');
            playerScore++;
            break;
        case (playerMove == "Star System" && enemyMove == "Black Hole"):
            
            enemyDamage.play();
            battleText.innerHTML = "Your Star System breaks physics and evaporates the enemy Black Hole!";
            displayBox[1].classList.add('highlight--damage');
            playerScore++;
            break;
            
        case (playerMove == "Atom" && enemyMove == "Star System"):
            enemyDamage.play();
            battleText.innerHTML = "Your Atom causes nuclear devastation on the enemy Star System!";
            displayBox[1].classList.add('highlight--damage');
            playerScore++;
            break;

        case (enemyMove == "Black Hole" && playerMove == "Atom"):
            playerDamage.play();
            battleText.innerHTML = "Enemy Black Hole consumes your Atom into its singularity!";
            displayBox[0].classList.add('highlight--damage');
            battleText.classList.add('text--shake');
            enemyScore++;
            break;

        case (enemyMove == "Star System" && playerMove == "Black Hole"):;
            playerDamage.play();
            battleText.innerHTML = "Enemy Star System's Civilization finds a way to defeat your Black Hole!";
            displayBox[0].classList.add('highlight--damage');
            battleText.classList.add('text--shake');
            enemyScore++;
            break;
                
        case (enemyMove == "Atom" && playerMove == "Star System"):
            playerDamage.play();
            battleText.innerHTML = "Enemy Atom causes nuclear devastation on YOUR Star System!";
            displayBox[0].classList.add('highlight--damage');
            battleText.classList.add('text--shake');
            enemyScore++;
            break;
    }
}

function roundPlay() {
    let playerMove;
    let enemyMove;

    for (let i = 0; i < 3; i++){
        moveButton[i].addEventListener('click', function e() {
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

            if (round >= roundTotal - 1){
                restartModal.classList.remove('hide');
                restartScore.innerHTML = winnerCheck();
                return;
            }
            
            enemyMove = enemyPlay();
            checkScore(playerMove, enemyMove);
            updateScore();
            roundCount();
            
        });
    }
}

roundPlay();

// Interface Animations
const startmodalClose = document.querySelector('.start-modal--closebutton');
startmodalClose.addEventListener('click', () => startModal.classList.add('hide'));
restartButton.addEventListener('click', () => location.reload());

const images = document.querySelectorAll('.game-buttons img');

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
    displayBox[0].classList.remove('highlight--damage')
    displayBox[0].classList.remove('highlight--tie')
});

displayBox[1].addEventListener('animationend', () => {
    displayBox[1].classList.remove('highlight--damage')
    displayBox[1].classList.remove('highlight--tie')
});



