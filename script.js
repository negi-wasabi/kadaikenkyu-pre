var gameContainer = document.getElementById("game-container");
var obj = document.getElementById("object");
var timerDisplay = document.getElementById("timer");

var timerInterval;
var time = 0;

obj.addEventListener("click", catchObject);

function startGame() {
  resetGame();
  startTimer();
  moveObject();
}

function resetGame() {
  clearInterval(timerInterval);
  time = 0;
  timerDisplay.textContent = "Time: 0s";
  obj.style.top = "0";
  obj.style.left = "0";
  obj.style.display = "block";
}

function startTimer() {
  timerInterval = setInterval(function() {
    time++;
    timerDisplay.textContent = "Time: " + time + "s";
  }, 1000);
}

function moveObject() {
  var containerWidth = gameContainer.offsetWidth - obj.offsetWidth;
  var containerHeight = gameContainer.offsetHeight - obj.offsetHeight;

  var randomX = Math.floor(Math.random() * containerWidth);
  var randomY = Math.floor(Math.random() * containerHeight);

  obj.style.top = randomY + "px";
  obj.style.left = randomX + "px";
}

function catchObject() {
  obj.style.display = "none";
  clearInterval(timerInterval);
  alert("Congratulations! You caught the object in " + time + " seconds.");
}
