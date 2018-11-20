
window.onload = function() {
  newGame();
}

  // references to document

var doc_gameRestartButton = document.getElementById("game-restart-button");
var doc_newPickButton = document.getElementById("new-pick-button");
var doc_character = document.getElementById("character");
var doc_guessedLetters = document.getElementById("guessedLetters");
var doc_guessesLeft = document.getElementById("guessesLeft");
var doc_wins = document.getElementById("wins");
var doc_losses = document.getElementById("losses");
var doc_pic = document.getElementById("character-image");


//variables for game

var characters = [
  "Arya Stark",
  "Bran Stark",
  "Catelyn Stark",
  "Cersei Lannister",
  "Daenerys Targaryen",
  "Jaime Lannister",
  "Jon Snow",
  "Jorah Mormont",
  "Khal Drogo",
  "Ned Stark",
  "Petyr Baelish",
  "Robb Stark", 
  "Robert Baratheon",
  "Sansa Stark",
  "Theon Greyjoy",
  "Tyrion Lannister",
];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameRunning = false;
var personChosen = "";
var personChosenArray = [];
var userLettersArray = [];
var wrongGuessesArray = [];


//newGame function

function newGame() {
    gameRunning = true;
    guessesLeft = 10;
    userLettersArray = [];
    wrongGuessesArray = [];
    personChosenArray = [];    

    // new Character Choice
    personChosen = characters[Math.floor(Math.random() * characters.length)];

    // create letter dashes

    for (var i = 0; i < personChosen.length; i++) {
        if (personChosen[i] === " ") {
        personChosenArray.push(" ");
        } 
        else if (personChosen[i] === "-") {
        personChosenArray.push("-");
        } 
        else {
        personChosenArray.push("_ ");
        }
    }

    //write to doc
    doc_guessesLeft.textContent = guessesLeft;
    doc_character.textContent = personChosenArray.join("");
    doc_guessedLetters.textContent = wrongGuessesArray;
    
   
}
//letterGuess function, checks if letter is correct

function letterGuess(letter) {
    
    if (gameRunning === true && userLettersArray.indexOf(letter) === -1) {
        // game logic

        userLettersArray.push(letter);

        // in picked word?

        for (var i = 0; i < personChosen.length; i++) {
            if (personChosen[i].toLowerCase() === letter.toLowerCase()) {
                personChosenArray[i] = personChosen[i];
                }
        }

        doc_character.textContent = personChosenArray.join("");
        checkIfWrong(letter);
    }
    else {
        if (!gameRunning) {
            alert("The Game is Over!")
        }
        else {
            alert("You've already guessed this letter!")
        }
    }
}

//check if you're Wrong

function checkIfWrong(letter) {
    
    if (personChosenArray.indexOf(letter.toLowerCase()) === -1 && personChosenArray.indexOf(letter.toUpperCase()) === -1) {
        
    guessesLeft--;
    wrongGuessesArray.push(letter.toUpperCase());
    doc_guessedLetters.textContent = wrongGuessesArray.join(" ");
    doc_guessesLeft.textContent = guessesLeft;

    }

    checkForLoss();
        
}

//check if you Lose

function checkForLoss() {
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        doc_losses.textContent = losses;
        doc_character.textContent = personChosen;
    }
    checkForWin();
}

//check if you Win
    function checkForWin() {
    if (personChosen.toLowerCase() === personChosenArray.join("").toLowerCase()) {
        wins++;
        gameRunning = false;
        doc_wins.textContent = wins;
          if (personChosen === characters[0]){
            doc_pic.src = "assets/images/Arya_Stark.jpg"
          }
          else if (personChosen === characters[1]){
            doc_pic.src = "assets/images/Bran_Stark.jpeg"
          }
          else if (personChosen === characters[2]){
            doc_pic.src = "assets/images/Catelyn_Stark.jpg"
          }
          else if (personChosen === characters[3]){
            doc_pic.src = "assets/images/Cersei_Lannister.jpg"
          }
          else if (personChosen === characters[4]){
            doc_pic.src = "assets/images/Daenerys_Targaryen.jpg"
          }
          else if (personChosen === characters[5]){
            doc_pic.src = "assets/images/Jaime_Lannister.jpg"
          }
          else if (personChosen === characters[6]){
            doc_pic.src = "assets/images/Jon_Snow.jpg"
          }
          else if (personChosen === characters[7]){
            doc_pic.src = "assets/images/Jorah_Mormont.jpg"
          }
          else if (personChosen === characters[8]){
            doc_pic.src = "assets/images/Khal_Drogo.jpg"
          }
          else if (personChosen === characters[9]){
            doc_pic.src = "assets/images/Ned_Stark.jpg"
          }
          else if (personChosen === characters[10]){
            doc_pic.src = "assets/images/Petyr_Baelish.jpg"
          }
          else if (personChosen === characters[11]){
            doc_pic.src = "assets/images/Robb_Stark.jpg"
          }
          else if (personChosen === characters[12]){
            doc_pic.src = "assets/images/Robert_Baratheon.jpg"
          }
          else if (personChosen === characters[13]){
            doc_pic.src = "assets/images/Sansa_Stark.jpg"
          }
          else if (personChosen === characters[14]){
            doc_pic.src = "assets/images/Theon_Greyjoy.jpg"
          }
          else if (personChosen === characters[15]){
            doc_pic.src = "assets/images/Tyrion_Lannister.jpg"
          }
          else {
            doc_pic.src = "assets/images/Backgrounds/The_Iron_Throne.jpg"
          }
        newGame();
    }
}

function restart() {
  location.reload();
}
//event listeners for buttons

doc_gameRestartButton.addEventListener("click", restart);
doc_newPickButton.addEventListener("click", newGame);



//event listener for onkeyup

document.onkeyup = function(event) {
    console.dir(event);
    if (event.keyCode >= 65 && event.keyCode <= 90)  {
        letterGuess(event.key);
    }
}

