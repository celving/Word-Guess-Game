// Create getElementByID variables for each element to link to the html //
var directionsText = document.getElementById("directions-text")
var wordArea = document.getElementById("word-area")
var guessesLeft = document.getElementById("guesses-left")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")

//Create the directions text//

var directionsText = "Press any key to get started!"
//Create variables to hold the number of inital wins/losses//

var wins = 0
var losses = 0

//Create a thing that corresponds to the word area?//

var wordArea = ""

//Add an event listener for the user's key presses//

document.onkeyup = function(event){
    var userGuess = event.key
    var wordArea = wordsToGuess[1]
    directionsText.textContent = ""
    console.log(wordsToGuess)
    console.log(userGuess)
    winsText.textContent = "Wins: " + wins
    lossesText.textContent = "Losses: " + losses
    //Create the logic of whether the user's key matches any of the letters in the word area? Probably using a lot of ifs//
}


//Logic to increment the wins/losses/number of guesses left?//

//Display the number of wins/losses//



//Something to contain a list of possible words for the user to guess//

var wordsToGuess = ["apple", "banana", "orange"]