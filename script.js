const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

const computerPlay = getComputerChoice();
console.log(computerPlay);