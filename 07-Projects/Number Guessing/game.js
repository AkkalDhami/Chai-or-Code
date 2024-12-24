let randomNum = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const stsrtOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let newGuess = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    prevGuess.push(guess);
    if (newGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random Number Was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg("You Win! The number was " + randomNum);
    endGame();
  } else if (guess > randomNum) {
    displayMsg("Too high! Guess again.");
  } else if (guess < randomNum) {
    displayMsg("Too low! Guess again.");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  newGuess += 1;
  remaining.innerHTML = `${11 - newGuess}`;
}

function displayMsg(messsage) {
  lowOrHi.innerHTML = `<h3>${messsage}</h3>`;
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - newGuess}`;
    userInput.removeAttribute('disabled')
    stsrtOver.removeChild(p)
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  stsrtOver.appendChild(p);
  playGame = false;
  newGame();
}
