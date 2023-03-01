let playerScore = document.querySelector('.player-score')
let enemyScore = document.querySelector('.enemy-score')
let resetBtn = document.querySelector('.reset-btn')


let playerPoint = 0;
let enemyPoint = 0;

function playerAddOne() {
    playerPoint+=1
    playerScore.textContent = playerPoint;
}   

function playerAddTwo() {
    playerPoint+=2
    playerScore.textContent = playerPoint;
}

function playerAddThree() {
    playerPoint+=3
    playerScore.textContent = playerPoint;
}

function enemyAddOne() {
    enemyPoint+=1
    enemyScore.textContent = enemyPoint;
}   

function enemyAddTwo() {
    enemyPoint+=2
    enemyScore.textContent = enemyPoint;
}

function enemyAddThree() {
    enemyPoint+=3
    enemyScore.textContent = enemyPoint;
}

resetBtn.addEventListener('click', () => {
    playerPoint=0;
    enemyPoint= 0;
    enemyScore.textContent = enemyPoint;
playerScore.textContent = enemyPoint;
})