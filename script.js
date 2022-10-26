'use strict';

// player Score
const player1 = document.querySelector("#score--0");
const player2 = document.querySelector("#score--1");
// Player Current Score
const currentScore1 = document.querySelector("#current--0");
const currentScore2 = document.querySelector("#current--1");
// NewGame Button
const newGameButton = document.querySelector(".btn--new");
// Dice Image
const diceImage = document.querySelector(".dice");
// Roll Dice
const rollDice = document.querySelector(".btn--roll");
// Hold Dice
const holdDice = document.querySelector(".btn--hold");

// Active player
const leftSide = document.querySelector(".player--0");
const rightSide = document.querySelector(".player--1");

let left = 1;


let current = 0;
let player1Score = 0;
let player2Score = 0;
rollDice.addEventListener("click", function () {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    if (left === 1) {
        diceImage.src = `dice-${randomNumber}.png`;
        current += randomNumber !== 1 ? randomNumber : 0;
        currentScore1.innerText = current;

        if (randomNumber === 1) {
            nextPerson();
            lr(0);
        }

    }
    else {
        diceImage.src = `dice-${randomNumber}.png`;
        current += randomNumber !== 1 ? randomNumber : 0;
        currentScore2.innerText = current;

        if (randomNumber === 1) {
            nextPerson1();
            lr(1);

        }
    }
})


const newGame = function () {
    current = 0;
    player1Score = 0;
    player2Score = 0;
    currentScore1.innerText = current;
    currentScore2.innerText = current;
    player1.innerText = current;
    player2.innerText = current;
    diceImage.src = `dice-1.png`;
}

const nextPerson = function () {
    // player1Score += current;
    // player1.innerText = player1Score;
    current = 0;
    currentScore1.innerText = current;
}
const nextPerson1 = function () {
    // player2Score += current;
    // player2.innerText = player2Score;
    current = 0;
    currentScore2.innerText = current;
}
const lr = function (l) {
    leftSide.classList.toggle("player--active");
    rightSide.classList.toggle("player--active");
    current = 0;
    left = l;
}

holdDice.addEventListener("click", function () {
    diceImage.src = `dice-1.png`;
    if (left === 1) {
        player1Score += current;
        player1.innerText = player1Score;
        nextPerson();
        lr(0)
    }
    else {
        player2Score += current;
        player2.innerText = player2Score;
        nextPerson1();
        lr(1);
    }
})

newGameButton.addEventListener("click", function () {
    newGame();
})

if (player1Score === 100) {
    leftSide.classList.add("player--winner");
}
if (player2Score === 100) {
    rightSide.classList.add("player--winner");
}