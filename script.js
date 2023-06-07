var gameContainer = document.getElementById("game-container");
var obj = document.getElementById("object");
var timerDisplay = document.getElementById("timer");
var scoreboard = document.querySelector("#scoreboard tbody");

var timerInterval;
var time = 0;
var scores = [];

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
  obj.style.display = "block";
}

function startTimer() {
  timerInterval = setInterval(function() {
    time++;
    timerDisplay.textContent = "Time: " + time + "s";
  }, 1000);
}

function moveObject() {
  var containerWidth = gameContainer.clientWidth - obj.offsetWidth;
  var containerHeight = gameContainer.clientHeight - obj.offsetHeight;

  var randomX = Math.floor(Math.random() * containerWidth);
  var randomY = Math.floor(Math.random() * containerHeight);

  obj.style.top = randomY + "px";
  obj.style.left = randomX + "px";

  setTimeout(moveObject, 2000);
}

function catchObject() {
  obj.style.display = "none";
  clearInterval(timerInterval);
  alert("Congratulations! You caught the object in " + time + " seconds.");

  scores.push(time);
  updateScoreboard();
}

function updateScoreboard() {
  scoreboard.innerHTML = "";
  for (var i = 0; i < scores.length; i++) {
    var scoreRow = document.createElement("tr");
    var scoreData = document.createElement("td");
    scoreData.textContent = scores[i] + "s";
    scoreRow.appendChild(scoreData);
    scoreboard.appendChild(scoreRow);
  }
}
