const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;
let gameRoundNumber = 0;
let gameOn = false

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








function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        
        return "It's a tie!";
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
          console.log(playerScore);
           playerScore++;
           console.log(`Player Score: ${playerScore}`);
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }

    if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
           

            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }

}




const playGame = () => {
    gameOn = true;
    gameRoundNumber = 0
    playerScore = 0;
    computerScore = 0;
    
    while (gameRoundNumber < 5) {
        
        console.log(`Round ${gameRoundNumber + 1}`);
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        if (humanSelection === null) {
            console.log("Game cancelled by the user.");
            break;
        }

        const result = playRound(humanSelection, computerSelection);
        gameRoundNumber++;
        console.log(result);
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }

    gameOn= false;
    const playAgain = confirm("Game over! Do you want to play again?");

    if (playAgain) {
        playGame();
    } else {
        console.log("Thanks for playing!");
    }

    
}

playGame();