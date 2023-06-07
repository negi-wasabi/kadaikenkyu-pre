var gameContainer = document.getElementById("game-container");
var cat = document.getElementById("cat");
var timerDisplay = document.getElementById("timer");

var timerInterval;
var time = 0;

cat.addEventListener("click", catchCat);

function startGame() {
  resetGame();
  startTimer();
  moveCat();
}

function resetGame() {
  clearInterval(timerInterval);
  time = 0;
  timerDisplay.textContent = "Time: 0s";
  cat.style.top = "0";
  cat.style.left = "0";
  cat.style.display = "block";
}

function startTimer() {
  timerInterval = setInterval(function() {
    time++;
    timerDisplay.textContent = "Time: " + time + "s";
  }, 1000);
}

function moveCat() {
  var containerWidth = gameContainer.offsetWidth - cat.offsetWidth;
  var containerHeight = gameContainer.offsetHeight - cat.offsetHeight;

  var randomX = Math.floor(Math.random() * containerWidth);
  var randomY = Math.floor(Math.random() * containerHeight);

  cat.style.top = randomY + "px";
  cat.style.left = randomX + "px";
}

function catchCat() {
  cat.style.display = "none";
  clearInterval(timerInterval);
  alert("Congratulations! You caught the cat in " + time + " seconds.");
}
