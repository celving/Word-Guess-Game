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
var guess = 0

//Create a thing that corresponds to the word area?//



//Something to contain a list of possible words for the user to guess//

var wordsToGuess = ["apple ", "banana", "orange", "pear  ", "mango "]

//Add an event listener for the user's key presses//

document.onkeyup = function(event){
    var userGuess = event.key

    directionsText.textContent = " "

    var currentWord = wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];

    console.log(currentWord)

    splitWord(currentWord)


    guessesText.textContent = "Guesses remaining: " + guess
    winsText.textContent = "Wins: " + wins
    lossesText.textContent = "Losses: " + losses
    //Create the logic of whether the user's key matches any of the letters in the word area? Probably using a lot of ifs//

}
//Create a string split function to seperate the word into letters//
function splitWord(word) {
    var split = word.split("");
    wordArea.textContent = "" + split[0] + "" + split[1] + "" + split[2] + "" + split[3] + "" + split[4] + "" + split[5]
   
}

//Logic to increment the wins/losses/number of guesses left?//

//Display the number of wins/losses//


