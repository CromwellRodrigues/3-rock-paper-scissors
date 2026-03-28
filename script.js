const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

const computerPlay = getComputerChoice();
console.log(computerPlay);


function getHumanChoice() {
    const humanChoice =prompt("Please choose rock, paper or scissors: ").toLowerCase();
    
    if (humanChoice === null) {
        return ("Please enter a choice");
    }

    if (humanChoice === "") {
        return ("Please type in a choice");
    }

    if (choices.includes(!humanChoice)) {
        return ("Please enter a valid choice");
    }

    if (choices.includes(humanChoice)) {
        return humanChoice;
    }

}


const player = getHumanChoice();
console.log(player);