//Global Variables
let round = 1;
let roundResult;
let finalResult;
let finalScore;
let computerScore = 0;
let userScore = 0; 
let tieScore = 0;
/*const images = {rock: "img/rock.png", 
    paper: "img/paper.png", 
    scissors: "img/scissors.png"};*/

//DOM Selections 
const computerChoiceImage = document.querySelector('#computerPic');
const resultText = document.querySelector('.resultText');
const userTotal = document.querySelector('.userScore');
const computerTotal = document.querySelector('.computerScore');
const tieTotal = document.querySelector('.tieScore')
const playAgain = createPlayAgainBtn();
const resultContainer = document.querySelector('.resultContainer');

//function to select computer's choice of rock, paper, or scissors
function computerPlay () {
      //set variable computerSelection to a random number between 1 and 3
      let computerMove = Math.floor((Math.random() * 3) + 1);
      //if statement assigning rock, paper, and scissors to a number 
      if (computerMove == 1) {
          computerChoiceImage.src = "img/rock.png"
          return 'rock';
      } else if (computerMove == 2) {
          computerChoiceImage.src = "img/scissors.png"
          return 'scissors';
      } else if (computerMove == 3) {
          computerChoiceImage.src = "img/paper.png"
          return 'paper';
      }
  }

//Define onclick events for userChoice
 let userChoices = document.querySelectorAll('.userOptions');
 userChoices.forEach((img) => {
     img.addEventListener('click', game);
 });

 function declareWinner () {
     if (computerScore > userScore) {
        resultText.textContent = 'You lose the game!';
    } else if (computerScore < userScore) {
        resultText.textContent = 'You win the game!';
    } else if (computerScore == userScore) {
        resultText.textContent = 'You tied with the computer!';
    }
 }

  
  
  //function to play a round of rock, paper, scissors
  function playRound (computerSelection, userSelection) {
      let result;
      switch (true) {
          //Losing statements
          case computerSelection === 'rock' && userSelection === 'scissors':
              result = 'lose';
              computerScore++;
              computerTotal.innerText = computerScore;
              resultText.textContent = 'Round ' + round + ': You lose! Rock crushes scissors.';
              break;
          case computerSelection === 'paper' && userSelection === 'rock':
              result = 'lose';
              computerScore++;
              computerTotal.innerText = computerScore;
              resultText.textContent = 'Round ' + round + ': You lose! Paper covers rock!';
              break;
          case computerSelection === 'scissors' && userSelection === 'paper':
              result = 'lose';
              computerScore++;
              computerTotal.innerText = computerScore;
              resultText.textContent = 'Round ' + round + ': You lose! Scissors cut paper!';
              break;
          //Winning statements
          case computerSelection ==='rock' && userSelection === 'paper':
              result = 'win';
              userScore++; 
              userTotal.innerText = userScore;
              resultText.textContent = 'Round ' + round + ': You vanquished the computer! Paper covers rock!';
              break;
          case computerSelection == 'paper' && userSelection === 'scissors':
              result = 'win';  
              userScore++; 
              userTotal.innerText = userScore;       
              resultText.textContent = 'Round ' + round + ': You vanquished the computer! Paper covers rock!';
              break;
          case computerSelection == 'scissors' && userSelection === 'rock':
              result = 'win';
              userScore++;
              userTotal.innerText = userScore;
              resultText.textContent = 'Round ' + round + ': You vanquished the computer! Rock crushes scissors!';
              break;
          //A tie
          case computerSelection === userSelection:
              result = 'tie';
              tieScore++;
              tieTotal.innerText = tieScore;
              resultText.textContent = 'Round ' + round + ': Tie! Try again.';
              break;
      }
      round++;
      return result;
   }
  
  //function to play game
  function game (e) {
    let userSelection = e.target.alt;
    let computerSelection = computerPlay();
    
     roundResult = playRound(computerSelection, userSelection);
    
     
     if (round == 6 || userScore == 3 || computerScore == 3) {
         declareWinner();
         resultContainer.appendChild(playAgain);
         userChoices.forEach((img) => {
            img.removeEventListener('click', game);
        });
     }
    
} 
 
//function to reset game
function resetGame () {
    //reset variables
    round = 1;
    computerScore = 0;
    userScore = 0; 
    tieScore = 0;

    //reset text
    resultText.textContent = "Click a weapon to challenge the computer to five rounds!";
    userTotal.innerText = 0;
    tieTotal.innerText = 0;
    computerTotal.innerText = 0;

    resultContainer.removeChild(playAgain);
    userChoices.forEach((img) => {
        img.addEventListener('click', game);
    });
}

//function to create Play Again button
function createPlayAgainBtn () {
    const btn = document.createElement('button');
    btn.innerText = 'Play Again?';
    btn.classList.add('playAgain');
    return btn;
}

playAgain.addEventListener('click', resetGame);

 