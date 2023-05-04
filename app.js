console.log('Welcome to Rock Paper Scissors!');

const rock = 1;
const paper = 2;
const scissors = 3;

let playerScore = 0;
let computerScore = 0;

let counter = 0;

//Button for testing: Increments number of points when button is clicked.

const counterButton = document.querySelector('.counter');
counterButton.addEventListener('click', addPoints);

function addPoints() {
    counter++;
    console.log(`The current count is: ${counter}. `);
}



// if playerScore > computerScore return "You win the game"
// if playerScore > computerScore return "You lose the game"

// Plays round when user clicks Start Game button
const startGame = document.querySelector('.start');
startGame.addEventListener('click', roundOne);

// Alerts user with the choice they made
const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => {
    alert('You chose "Rock". ')
})

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => {
    alert('You chose "Paper". ')
})

const btnScissors = document.querySelector('.scissors'); 
btnScissors.addEventListener('click', () => {
    alert('You chose "Scissors". ');
})

// Plays one round of Rock Paper Scissors.
function roundOne(playerChoice, computerChoice) {
    playerChoice = prompt('Choose "Rock", "Paper", or "Scissors". ');
    computerChoice = Math.floor(Math.random() * 3) + 1;

    // Display player and computer choices.
    console.log(playerChoice);
    console.log(computerChoice);

    //playerChoice is Rock and computerChoice is Rock.
    if (playerChoice == 1 || playerChoice == "Rock" && computerChoice == 1) {
        console.log("It's a draw! ");

        //playerChoice is Paper and computerChoice is Rock.
    } else if (playerChoice == 2 || playerChoice == "Paper" && computerChoice == 1) {
        console.log('You chose "Paper" and Computer chose "Rock". You win! ');

        playerScore++;

        console.log(`Your current score is ${playerScore} ` );

        //playerChoice is Scissors and computerChoice is Rock.
    } else if (playerChoice == 3 || playerChoice == "Scissors" && computerChoice == 1) {
        console.log('You chose "Scissors" and Computer chose "Rock". You lose. ');

        computerScore++;

        console.log(`Computer Score is ${computerScore} `);

        //playerChoice is Rock and computerChoice is Paper. 
    } else if (playerChoice == 1 || playerChoice == "Rock" && computerChoice == 2) {
        console.log('You chose "Rock" and Computer chose "Paper". You lose. ');

        computerScore++;

        console.log(`Computer score is ${computerScore} `);

        //playerChoice is Paper and computerChoice is Paper.
    } else if (playerChoice == 2 || playerChoice == "Paper" || 2 && computerChoice == 2) {
        console.log("It's a draw!");

        //playerChoice is Scissors and computerChoice is Paper.
    } else if (playerChoice == 3 || playerChoice == "Scissors" && computerChoice == 2) {
        console.log('You chose "Scissors" and Computer chose "Paper". You win! ');

        playerScore++;

        console.log(`Your current score is ${playerScore} `);

        //playerChoice is Rock and computerChoice is Scissors.
    } else if (playerChoice == 1 || playerChoice == "Rock" && computerChoice == 3) {
        console.log('You chose "Rock" and Computer chose "Scissors". You win! ');

        playerScore++;

        console.log(`Your current score is ${playerScore} `);

        //playerChoice is Paper and computerChoice Scissors
    } else if (playerChoice == 2 || playerChoice == "Paper" && computerChoice == 3) {
        console.log('You chose "Paper" and Computer chose "Scissors". You lose. ');
        
        computerScore++;

        console.log(`Computer score is ${computerScore} `);
        
        //playerChoice is Scissors and computerChoice is Scissors
    } else if (playerChoice = 3 || playerChoice == "Scissors" && computerChoice == 3) {
        console.log("It's a draw! ");

        //playerChoice is different from Rock, Paper, or Scissors.
    } else {
        console.log('Please choose "Rock", "Paper", or "Scissors". ');
    }
}