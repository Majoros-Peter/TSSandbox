const numEl = document.querySelector("#inputNum") as HTMLInputElement;
const resultEL = document.querySelector("#result") as HTMLParagraphElement;
const theNumber = Math.floor(Math.random() * 100) + 1;

const guess = () =>{
    const guessNumber = numEl.valueAsNumber;
    resultEL.innerText = szoveg(guessNumber);
}

const szoveg = (guessNumber: number) => guessNumber > theNumber ? "Kisebb" 
                                        : guessNumber < theNumber ? "Nagyobb!"
                                        : "Eltaláltad!";