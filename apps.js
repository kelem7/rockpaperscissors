  //Prompt function 
  console.log('Please type game(); to begin.')


  //function to select computer's choice of rock, paper, or scissors
  function computerPlay () {
      //set variable computerSelection to a random number between 1 and 3
      let computerMove = Math.floor((Math.random() * 3) + 1);
      //if statement assigning rock, paper, and scissors to a number 
      if (computerMove == 1) {
          return 'rock';
      } else if (computerMove == 2) {
          return 'scissors';
      } else if (computerMove == 3) {
          return 'paper';
      }
  }

  //Prompt user to play
   function userPlay () {
      //Prompt userSelection, set variables, set to lowercase
      let userMove = prompt('Your move! Rock, paper, or scissors?').toLowerCase();
      return userMove;
  }
  
  //function to play a round of rock, paper, scissors
  function playRound (computerSelection, userSelection) {
      let result;

      switch (true) {
          //Losing statements
          case computerSelection === 'rock' && userSelection === 'scissors':
              result = 'lose';
              console.log('You lose! Rock crushes scissors.');
              break;
          case computerSelection === 'paper' && userSelection === 'rock':
              result = 'lose';
              console.log('You lose! Paper covers rock!');
              break;
          case computerSelection === 'scissors' && userSelection === 'paper':
              result = 'lose';
              console.log('You lose! Scissors cut paper!');
              break;
      //Winning statements
          case computerSelection ==='rock' && userSelection === 'paper':
              result = 'win';
              console.log('You vanquished the computer! Paper covers rock!');
              break;
          case computerSelection == 'paper' && userSelection === 'scissors':
              result = 'win';          
              console.log('You vanquished the computer! Paper covers rock!');
              break;
          case computerSelection == 'scissors' && userSelection === 'rock':
              result = 'win';
              console.log('You vanquished the computer! Rock crushes scissors!');
              break;
      //A tie
          case computerSelection === userSelection:
              result = 'tie';
              console.log('Tie! Try again.');
              break;
          default:
              console.log('Please enter rock, paper, or scissors.');
      }
      return result;
   }
   
  //function to play game
  function game () {
      let rounds = 5;
      let roundResult;
      let finalResult;
      let finalScore;
      let computerScore = 0;
      let userScore = 0; 
      let tieScore = 0;


      for (let i = 1; i <= rounds; i++) {
          //Return response to playing a round
          roundResult  = playRound(computerPlay(), userPlay());
      }

      if (roundResult === 'win') {
          userScore++;
      } else if (roundResult === 'lose') {
          computerScore++;
      } else if (roundResult === 'tie') {
          tieScore++;
      }

      if (computerScore > userScore) {
          finalResult = 'You lose!';
      } else if (computerScore < userScore) {
          finalResult = 'You win!';
      } else if (computerScore == userScore) {
          finalResult = 'You tied!';
      }

      finalScore = 
      `FINAL SCORE
      __________________
      You won ${userScore} times!
      You lost ${computerScore} times!
      You tied ${tieScore} times!
      ${finalResult}
      `
      return console.log(finalScore);
      
  }
