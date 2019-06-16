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


var char1 = 0
var char2 = 0
var char3 = 0
var char4 = 0
var char5 = 0
var char6 = 0

//Something to contain a list of possible words for the user to guess//

var wordsToGuess = ["apples", "banana", "orange", "grapes", "mangos"]

var displayedWord = ["_","_","_","_","_","_"]
//Add an event listener for the user's key presses//

document.onkeyup = function(event){
    var userGuess = event.key

    directionsText.textContent = " "
    
    

    var currentWord = wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];

    wordArea.textContent = "" + displayedWord[0] + " " + displayedWord[1] + " " + displayedWord[2] + " " + displayedWord[3] + " " + displayedWord[4] + " " + displayedWord[5] + ""


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
    if (userGuess = char1){
        displayedWord[0] === char1
    }

    else if (userGuess = char2){
        displayedWord[1] === char2
    }

    else if (userGuess = char3){
        displayedWord[2] === char3
    }

    else if (userGuess = char4){
        displayedWord[3] === char4
    }

    else if (userGuess = char5){
        displayedWord[4] === char5
    }

    else if (userGuess = char6){
        displayedWord[5] === char6
    }
    
    guess --
}
//Create a string split function to seperate the word into letters//
function splitWord(word) {
    var split = word.split("");
    char1 = split[0];
    char2 = split[1];
    char3 = split[2];
    char4 = split[3];
    char5 = split[4];
    char6 = split[5];

}

//Logic to increment the wins/losses/number of guesses left?//

//Display the number of wins/losses//


