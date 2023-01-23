let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio1 = new Audio("./audio/mixkit-arcade-game-opener-222.wav");
let audioSteps = new Audio("./audio/mixkit-heavy-grass-step-1922.wav")
let audioWin = new Audio("./audio/tadaa-47995.mp3");
let audioLose = new Audio("./audio/mixkit-player-losing-or-failing-2042.wav")
const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";

};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

// Reload the page

const newGameBegin = () => {
    audio1.play();
    window.location.reload();
}

// Start the game
const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}

// Main logic of our app
const compareGuess = () => {
    audioSteps.play();
    let userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    console.log(userGuess);

    // check the value low or high
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High 😮";
            userNumberUpdate.value = "";
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low 😔";
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "Hurray!! 😃 You won";
            userNumberUpdate.value = "";
            audioWin.play();

            startNewGame();
        }
    } else {
        
            if (userNumber > computerGuess) {
                userGuessUpdate.innerHTML = `Your Lost!!😔 Correct number is ${computerGuess}`;
                userNumberUpdate.value = "";
                audioLose.play();
                startNewGame();
            } else if (userNumber < computerGuess) {
                userGuessUpdate.innerHTML = `Your Lost!!😔 Correct number is ${computerGuess}`;
                userNumberUpdate.value = "";
                audioLose.play();
                startNewGame();
            } else {
                userGuessUpdate.innerHTML = "Hurray 😃 You won";
                userNumberUpdate.value = "";
                audioWin.play();
                startNewGame();
            }
        }
        document.getElementById("attempts").innerHTML = userGuess.length;
    };

    const easyMode = () => {
        audio1.play();
        maxGuess = 10;
        startGame();
    }

    const hardMode = () => {
        audio1.play();
        maxGuess = 5;
        startGame();
    }