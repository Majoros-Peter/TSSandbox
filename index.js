"use strict";
const numEl = document.querySelector("#inputNum");
const resultEL = document.querySelector("#result");
const theNumber = Math.floor(Math.random() * 100) + 1;
const guess = () => {
    const guessNumber = numEl.valueAsNumber;
    resultEL.innerText = szoveg(guessNumber);
};
const szoveg = (guessNumber) => guessNumber > theNumber ? "Kisebb"
    : guessNumber < theNumber ? "Nagyobb!"
        : "Eltaláltad!";
