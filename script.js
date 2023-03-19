// present buttons
// get player choice
// get computer choice
// compare player choice and computer choice
// ++ score
// repeat
// first player to five wins
// reset game

let computerScore = 0;
let playerScore = 0;
let playerWin = "You win!"
let computerWin = "You lose!"
let tie = "It's a tie!"
let rockbutton = document.getElementById("rock");
let paperbutton = document.getElementById("paper");
let scissorsbutton = document.getElementById("scissors");
let submit = document.querySelectorAll("submit"),value;

let choices = ["rock", "paper", "scissors"];

    function getComputerChoice(choices) {
        let randomIndex = Math.floor(Math.random() * choices.length);
        let item = choices[randomIndex];
    return item;
}

let computerSelection = getComputerChoice(choices);

rockbutton.addEventListener('click', function(){
    playRound('rock', computerSelection);
    });
    
    paperbutton.addEventListener('click', function(){
    playRound('paper', computerSelection);});
    
    scissorsbutton.addEventListener('click', function(){
    playRound('scissors', computerSelection);
    });
    
    const allButtons = document.querySelectorAll('submit') 
    allButtons.forEach((submit) => {
      submit.addEventListener('click', function(ev) { 
        playRound(playerSelection, computerSelection, ev.target.value);
      })
    })
    
function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice(choices);

    function getScore(playerScore, computerScore) {
         document.getElementById('results').textContent = "Player Score: " + playerScore + ' ' + "Computer Score: " + computerScore;
         
}
    
    if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper"||
        playerSelection === "scissors" && computerSelection === "scissors") 
        {
        alert ("It's a tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock")
    {
        computerScore++;
        alert ("Computer wins!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") 
            {
        playerScore++;
        alert ("Player wins!");
    }

    getScore(playerScore, computerScore);
    endGame(playerScore, computerScore);
}

function endGame (playerScore, computerScore) {
    if (playerScore == 5) {

        document.getElementById('results').textContent = "Player Score: " + playerScore + ' ' + "Computer Score: " + computerScore;
        alert ("Player wins!")
        location.reload(); 
     }
     else if (computerScore == 5) {
        document.getElementById('results').textContent = "Player Score: " + playerScore + ' ' + "Computer Score: " + computerScore;
        alert ("Computer wins!")
        location.reload(); 
     }
}





