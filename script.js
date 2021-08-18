// global variable
let userPlay;
let pScore = 0;
let cScore = 0;
const optionBtn = document.querySelectorAll(".button button");

optionBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    userPlay = e.path[1].id;

    playOnce(userPlay, computerPlay());
  });
});
// //! create a function that return a random option

function computerPlay() {
  let comOption = ["Rock", "Paper", "Scissors"];
  return comOption[Math.floor(Math.random() * 3)];
}



//!!! create a function that plays game once
function playOnce(playerSelection, computerSelection) {

  let userOption = playerSelection.toLowerCase();
  let computerOption = computerSelection.toLowerCase();

  // display message of game
  const roundMessage = document.querySelector(".js-msg");

  // display selection image 0f user and computer
  const displayUserSelection = document.querySelector(".js-user-selection");
  const displayComputerSelection = document.querySelector(".js-comp-selection");

  displayUserSelection.setAttribute(
    "src",
    `media/image-icons/${userOption}-svgrepo-com.svg`
  );

  displayUserSelection.style.cssText = "width:50px; height:50px";

  displayComputerSelection.setAttribute(
    "src",
    `media/image-icons/${computerOption}-svgrepo-com.svg`
  );

  displayComputerSelection.style.cssText = "width:50px; height:50px";

  // updating user and computer Scores
  const playerScore = document.querySelector(".js-user-score");
  const computerScore = document.querySelector(".js-comp-score");


  if (userOption === computerOption) {
    roundMessage.textContent = "Tie";
  } else {
    if (userOption === "rock" && computerOption === "paper") {
      roundMessage.textContent = "You lost ! Paper beats Rock ";
      cScore++;
    } else if (userOption === "rock" && computerOption === "scissors") {
      roundMessage.textContent = "You Win ! Rock beats Scissors  ";
      pScore++;
    } else if (userOption === "paper" && computerOption === "rock") {
      roundMessage.textContent = "You Win ! Paper beats Rock ";
      pScore++;
    } else if (userOption === "paper" && computerOption === "scissors") {
      roundMessage.textContent = "You lost ! Scissors cuts Paper  ";
      cScore++;
    } else if (userOption === "scissors" && computerOption === "paper") {
      roundMessage.textContent = "You Win !  Scissors cuts Paper  ";
      pScore++;
    } else if (userOption === "scissors" && computerOption === "rock") {
      roundMessage.textContent = "You lost ! Rock beats Scissors ";
      cScore++;
    }
  }

  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

  if (pScore === 5 || cScore === 5) {
    if (pScore === 5) {
      winPage();
     
    } else {
      lostPage();
      
    }
  }

}


// hide start page and show game page

function showGamePage() {
  const gamePage = document.querySelector(".main");
  const introPage = document.querySelector(".intro");
  gamePage.style.cssText = "display:block";
  introPage.style.cssText = "display:none";
}

const btnOne = document.querySelector(".start__button");
btnOne.addEventListener("click", showGamePage);

// game page logic

function winPage() {
  const parentEle = document.querySelector(".congrats");
  const gamePage = document.querySelector(".main");
  parentEle.style.cssText = "display:flex";
  gamePage.style.display = "none";
}

function lostPage() {
  const parentEle = document.querySelector(".sad");
  const gamePage = document.querySelector(".main");
  parentEle.style.cssText = "display:flex; justify-content:center; align-items:center;";
  gamePage.style.display = "none";
}

const playAgainBtn = document.querySelectorAll('.pa');
playAgainBtn.forEach(button=>{
  button.addEventListener('click',()=>{
    location.reload();
  })
})

