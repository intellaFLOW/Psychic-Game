//1.  Create global functions that can be accessed by the code when nessecary.
//2.  The computer selects a letter at random.
//3.  The player has 9 chances to guess whichever letter the computer has chosen.
//      -If the player guesses the correct letter, the game will display a congratulatory message.
//      -If the player guesses the incorrect letter, s/he will have to keep guessing until they guess the correct letter or until they've utilized their 9 guesses, whichever comes first.
//        -If the player loses to the computer, a "wanna try again?" message will pop up
//4.  The game will reset. 
var letterChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var rightLetter = null;



var computerGuess = letterChoice[Math.floor(Math.random() * letterChoice.length)];

var updateGuessesLeft = function() {
  document.getElementById('guessesLeft').innerHTML = "Guesses left: "  + guessesLeft;
};

var updateRightLetter = function() {
  this.rightLetter = this.letterChoice[Math.floor(Math.random() * this.letterChoice.length)];
};
var updateGuessesSoFar = function() {
  document.getElementById('guessesWrong').innerHTML = "Your Incorrect Guesses: " + guessedLetters.join(', ');
};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateRightLetter();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateRightLetter();
updateGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == rightLetter){
                wins++;
                document.getElementById('wins').innerHTML = "Wins: " + wins;
                alert("You win this round...");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.getElementById('losses').innerHTML = "Losses: " + losses;
            alert("You Suck...wanna try again?");
            reset();
        }
};
