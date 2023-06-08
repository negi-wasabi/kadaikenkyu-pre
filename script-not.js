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
  var containerWidth = gameContainer.offsetWidth - obj.offsetWidth;
  var containerHeight = gameContainer.offsetHeight - obj.offsetHeight;

  var randomX = Math.floor(Math.random() * containerWidth);
  var randomY = Math.floor(Math.random() * containerHeight);

  var startX = parseInt(obj.style.left) || 0;
  var startY = parseInt(obj.style.top) || 0;
  var endX = randomX;
  var endY = randomY;
  var duration = 1000; // アニメーションの時間（ミリ秒）
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var easeProgress = easeInOutQuad(progress, 0, 1, duration);

    var deltaX = endX - startX;
    var deltaY = endY - startY;
    var currentX = startX + deltaX * easeProgress;
    var currentY = startY + deltaY * easeProgress;

    obj.style.left = currentX + "px";
    obj.style.top = currentY + "px";

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      moveObject(); // アニメーションが終了したら次の移動を開始
    }
  }

  requestAnimationFrame(animate);
}

// イージング関数（開始値、終了値、現在の進捗度合い、総時間）
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

function catchObject() {
  obj.style.display = "none";
  clearInterval(timerInterval);
  alert("Congratulations! You caught the object in " + time + " seconds.");

  scores.push(time);
  updateScoreboard();
  resetGame();
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
