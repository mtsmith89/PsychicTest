// Variables

var wins = 0;

var losses = 0;

var remaining = 10;

var lettersGuessed = [];

var letter = renderLetter();

//Functions

function renderLetter() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 1; i++)
    text = possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function updateWins() {
  document.querySelector("#wins").innerHTML = wins;
}

function updateLosses() {
  document.querySelector("#losses").innerHTML = losses;
}

function updateRemaining() {
  document.querySelector("#remaining").innerHTML = remaining;
}

function updateGuessed() {
  document.querySelector("#guessed").innerHTML = lettersGuessed;
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
console.log(letter);

document.onkeyup = function(event) {
  var userInput = String.fromCharCode(event.which).toLowerCase();

  console.log(userInput);

  if (userInput === letter) {
    wins++;
    updateWins();
    alert("You Win, it was the letter " + letter + ". Play Again!");
    remaining = 10;
    lettersGuessed.length = 0;
    letter = renderLetter();
    updateGuessed();
    updateRemaining();
  } if (lettersGuessed.includes(" " + userInput + " ") === true) {
    alert("You've already guessed that letter!");
    return;
  } else if (userInput != letter, isLetter(userInput) != null) {
      console.log(isLetter(userInput));
    remaining--;
    updateRemaining();
    lettersGuessed.push(" " + userInput + " ");
    updateGuessed();    
  }

  if (remaining === 0) {
    losses++;
    updateLosses();
    alert("You Lose, it was the letter " + letter + ". Try Again!");
    remaining = 10;
    lettersGuessed.length = 0;
    letter = renderLetter();
    updateRemaining();
    updateGuessed();
  }
};

window.onload=function(){

prompt();

};

