// Create getElementByID variables for each element to link to the html //
var directionsText = document.getElementByID("directions-text")
var wordArea = document.getElementByID("word-area")
var guessesLeft = document.getElementByID("guesses-left")
var wins = document.getElementByID("wins-text")
var losses = document.getElementByID("losses-text")

//Create variables to hold the number of inital wins/losses//

var wins = 0
var losses = 0

//Create a thing that corresponds to the word area?//

var wordArea

//Add an event listener for the user's key presses//

document.onkeyup = function(event) {
    var userGuess = event.key
    //Create the logic of whether the user's key matches any of the letters in the word area? Probably using a lot of ifs//
}


//Logic to increment the wins/losses/number of guesses left?//


//Something to contain a list of possible words for the user to guess//