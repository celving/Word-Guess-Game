// Create getElementByID variables for each element to link to the html //
var directionsText = document.getElementById("directions-text")
var wordArea = document.getElementById("word-area")
var guessesText = document.getElementById("guesses-left")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")

//Create the directions text//

directionsText.textContent = "Press any key to get started!"
//Create variables to hold the number of inital wins/losses//

var wins = 0
var losses = 0

var guess = 12

var lettersGuessed = [];

//Something to contain a list of possible words for the user to guess//

var wordsToGuess = ["apple", "banana", "orange", "grapes", "mango"]

//Add an event listener for the user's key presses//

document.onkeyup = function(event){
    var userGuess = event.key

    directionsText.textContent = " "
    


    var currentWord = wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];

    wordArea.textContent = " "



    console.log(currentWord)

    splitWord(currentWord)

    guessesText.textContent = "Guesses remaining: " + guess
    winsText.textContent = "Wins: " + wins
    lossesText.textContent = "Losses: " + losses
    
    
    
    
    if (guess < 1){
        losses ++
        guess = 12
    }
    //Create the logic of whether the user's key matches any of the letters in the word area? Probably using a lot of ifs//

    
    
    guess --
}
//Create a string split function to seperate the word into letters//
function splitWord(word) {
    var split = word.split("");
    for (w = 0; w < split.length ; w++){
        var wordArea = document.getElementById("word-area")
        let underscoreBlank = document.createElement("div");
        underscoreBlank.textContent = "_";

        wordArea.appendChild(underscoreBlank)
    }

}

//Logic to increment the wins/losses/number of guesses left?//

//Display the number of wins/losses//


