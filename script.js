const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

const computerSelection = getComputerChoice();
console.log(computerSelection);


function getHumanChoice() {
    let humanInput = prompt("Please choose rock, paper or scissors: ") ;

    
    if (humanInput === null) {
        return null;
    }

   
   

    let humanChoice = humanInput.trim().toLowerCase();

   if (humanChoice === "") {
        return null;
}
    if (choices.includes(humanChoice)) {
        return humanChoice;
    }

    return null;
  
}

const humanSelection = getHumanChoice()
console.log(humanSelection);






function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            playerScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }

    if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }

}


const result = playRound(humanSelection, computerSelection);
console.log(result);
console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);