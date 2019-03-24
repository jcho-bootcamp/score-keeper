// Button selector
const p1Button = document.querySelector("button");
const p2Button = document.querySelectorAll("button")[1];
const resetButton = document.querySelectorAll("button")[2];

// Score selector
let p1Display = document.getElementById("p1Display");
let p2Display = document.getElementById("p2Display");

// Max score selector
let maxScore = document.getElementById("maxScore");

// Input selector
let input = document.querySelector("input");

// Default gameover value
let gameOver = false;

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

// Increment p1Display
p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

// Increment p2Display
p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

// Reset button
resetButton.addEventListener("click", reset);

// Reset function
function reset() {
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;

  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");

  gameOver = false;
};

// Max score tracker
input.addEventListener("change", function () {
  maxScore.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});



