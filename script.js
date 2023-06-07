function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkGuess() {
  var userInput = document.getElementById("guessInput").value;
  var guessedNumber = parseInt(userInput);

  if (isNaN(guessedNumber)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    return;
  }

  var randomNumber = getRandomNumber(1, 500);
  document.getElementById("number").textContent = randomNumber;

  var isEven = randomNumber % 2 === 0;
  var guessedEven = userInput.toLowerCase() === "even";

  if ((isEven && guessedEven) || (!isEven && !guessedEven)) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Incorrect!";
  }
}
