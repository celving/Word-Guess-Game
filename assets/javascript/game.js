// Global variables //
var directionsText = document.getElementById("directions-text")
var wordArea = document.getElementById("word-area")
var guessesText = document.getElementById("guesses-left")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var wrongGuesses = document.getElementById("wrong-guesses")
var winCountdown = 5

//a list of possible words for the user to guess//
var wordsToGuess = ["shark", "cuttlefish", "plankton", "octopus", "stingray", "dolphin", ""]


//Holds the current word to be guessed//

var currentWord

var displayedLetters = []

var currentLetters = []

//Holds the guessed letters for the current word//

var guessedLetters = []


//Create variables to hold the number of wins/losses//

var wins = 0
var losses = 0


//Create the directions text//

directionsText.textContent = "Press any key to get started!"


var guessesRemaining = 1



//Functions//

var startGame = function(){
    wordArea.textContent = " ";
    directionsText.textContent = " ";

    currentWord = wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
    
    splitWord(currentWord);
    
    blankFill();


    wordArea.textContent = displayedLetters.join(" ");
    
    
    guessesText.textContent = "Guesses remaining: " + guessesRemaining
    winsText.textContent = "Wins: " + wins
    lossesText.textContent = "Losses: " + losses

    winCountdown = currentLetters.length;

    window.removeEventListener("keyup", startGame);

    window.addEventListener("keyup", checkLetters);
}

//Create a string split function to seperate the word into letters//
function splitWord(word) {
    var split = word.split("");
    
    guessesRemaining = split.length * 2;

    for (w = 0; w < split.length ; w++){
        currentLetters.push(split[w])
    }



    
    console.log(currentLetters)
}

//Create a function to fill the displayed letters with blanks

var blankFill = function(){
    for (b = 0; b < currentLetters.length; b++){
        displayedLetters.push("_")
    }
}


//Add event listeners for the user's key presses//

window.addEventListener("keyup", startGame)

//Function to check the user's keystroke against currentLetters[]//

var checkLetters = function(){

    
    guessesText.textContent = "Guesses remaining: " + guessesRemaining
    winsText.textContent = "Wins: " + wins
    lossesText.textContent = "Losses: " + losses

    
    guessesRemaining --

    var userGuess = event.key.toLowerCase();
    for (var g = 0; g < currentLetters.length; g++) {
        if (currentLetters[g] === userGuess ){
            displayedLetters[g] = userGuess;

            wordArea.textContent = displayedLetters.join(" ");

            winCountdown--;
            

            console.log(winCountdown)
        }



    }
    
        guessedLetters.push(userGuess.toUpperCase())
        
        wrongGuesses.textContent = guessedLetters.join(" ")



    if (winCountdown < 1){
        wins ++
        
        window.addEventListener("keyup", startGame)

        
        window.removeEventListener("keyup", checkLetters);

        directionsText.textContent = "Well done! Press any key to play again."

        
        wordArea.textContent = " ";
        
        currentLetters.length = 0;
        directionsText.length = 0;
        displayedLetters.length = 0;
        wrongGuesses.textContent = " ";
        guessedLetters.length = 0;

    }

    if (guessesRemaining <= 1){
        losses ++

        window.addEventListener("keyup", startGame)

        
        window.removeEventListener("keyup", checkLetters);

        directionsText.textContent = "Too bad! Press any key to play again."

        wordArea.textContent = " ";

        currentLetters.length = 0;
        directionsText.length = 0;
        displayedLetters.length = 0;
        wrongGuesses.textContent = " ";
        guessedLetters.length = 0;
    }

}


