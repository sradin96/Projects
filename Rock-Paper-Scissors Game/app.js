let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-boaard");
const result = document.querySelector(".result p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function compChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result.innerHTML =
    userChoice +
    smallUserWord +
    " beats " +
    compChoice +
    smallCompWord +
    ". You win!";
  document.getElementById(userChoice).classList.add("green-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 600);
}

function lose(userChoice, compChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result.innerHTML =
    userChoice +
    smallUserWord +
    " loses to " +
    compChoice +
    smallCompWord +
    ". You lost!";
  document.getElementById(userChoice).classList.add("red-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 600);
}

function draw(userChoice, compChoice) {
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result.innerHTML =
    userChoice +
    smallUserWord +
    " equals " +
    compChoice +
    smallCompWord +
    ". It's a draw!";
  document.getElementById(userChoice).classList.add("gray-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 600);
}

function game(userChoices) {
  const compChoices = compChoice();
  switch (userChoices + compChoices) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoices, compChoices);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoices, compChoices);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoices, compChoices);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });
  paper.addEventListener("click", function () {
    game("paper");
  });
  scissors.addEventListener("click", function () {
    game("scissors");
  });
}

main();
