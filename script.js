"use strict";

//Selecting elements
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHoldDice = document.querySelector(".btn--hold");

//Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hide");

//Rolling dice functionality
btnRollDice.addEventListener("click", function () {
  const diceImg = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hide");
  dice.src = `dice-${diceImg}.png`;
});
