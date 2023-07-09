console.log('Welcome to Rock Paper Scissors!');

const rock = 1;
const paper = 2;
const scissors = 3;

let playerScore = 0;
let computerScore = 0;

let playerChoice = '';

//Scoreboard to display player and computer scores
const scoreBoard = document.querySelector('.scores');
const para = document.createElement('p');
const displayPlayer = document.querySelector('.player-score');
const displayComputer = document.querySelector('.computer-score');

// Plays round when user clicks Start Game button
const startGame = document.querySelector('.start');
startGame.addEventListener('click', roundOne);

//Sets player's choice to Rock
const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => {
    const playerChoice = 'Rock';
    roundOne(playerChoice);
    displayPlayer.textContent = `Your score is  ${playerScore}`; 
    displayComputer.textContent = `Computer score is ${computerScore}`;
})

//Sets player's choice to Paper
const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => {
    const  playerChoice = 'Paper';
    roundOne(playerChoice);
    displayPlayer.textContent = `Your score is ${playerScore}`;
    displayComputer.textContent = `Computer score is ${computerScore}`;
})

//Sets player's choice to Scissors
const btnScissors = document.querySelector('.scissors'); 
btnScissors.addEventListener('click', () => {
    const playerChoice = 'Scissors';
    roundOne(playerChoice);
    displayPlayer.textContent = `Your score is ${playerScore}`
    displayComputer.textContent = `Computer Score is ${computerScore}`;
})

//Stops game when score is equal to 5.


//Plays a round of the game
function roundOne(playerChoice, computerChoice) {


    computerChoice = Math.floor(Math.random() * 3) + 1;

    console.log(playerChoice);
    console.log(computerChoice);

    if (playerScore === 5 || computerScore === 5) {
        scoreBoard.appendChild(para);
        para.textContent = 'Game over! '
    }
    
    if (playerChoice == 1 || playerChoice == "Rock" && computerChoice == 1) {
        console.log("It's a draw! ");

    } else if (playerChoice == 2 || playerChoice == "Paper" && computerChoice == 1) {
        console.log('You chose "Paper" and Computer chose "Rock". You win! ');

        playerScore++;

        console.log(`Your current score is ${playerScore} ` );

    } else if (playerChoice == 3 || playerChoice == "Scissors" && computerChoice == 1) {
        console.log('You chose "Scissors" and Computer chose "Rock". You lose. ');

        computerScore++;

        console.log(`Computer Score is ${computerScore} `);

    } else if (playerChoice == 1 || playerChoice == "Rock" && computerChoice == 2) {
        console.log('You chose "Rock" and Computer chose "Paper". You lose. ');

        computerScore++;

        console.log(`Computer score is ${computerScore} `);

    } else if (playerChoice == 2 || playerChoice == "Paper" || 2 && computerChoice == 2) {
        console.log("It's a draw!");

    } else if (playerChoice == 3 || playerChoice == "Scissors" && computerChoice == 2) {
        console.log('You chose "Scissors" and Computer chose "Paper". You win! ');

        playerScore++;

        console.log(`Your current score is ${playerScore} `);

    } else if (playerChoice == 1 || playerChoice == "Rock" && computerChoice == 3) {
        console.log('You chose "Rock" and Computer chose "Scissors". You win! ');

        playerScore++;

        console.log(`Your current score is ${playerScore} `);

    } else if (playerChoice == 2 || playerChoice == "Paper" && computerChoice == 3) {
        console.log('You chose "Paper" and Computer chose "Scissors". You lose. ');
        
        computerScore++;

        console.log(`Computer score is ${computerScore} `);
        
    } else if (playerChoice = 3 || playerChoice == "Scissors" && computerChoice == 3) {
        console.log("It's a draw! ");

    } else {
        console.log('Please choose "Rock", "Paper", or "Scissors". ');
    }

    if (computerScore === 5) {
        console.log('Game over. Computer wins. ');

    }

    if (playerScore === 5) {
        console.log('Game over. You win!');
    }
}
