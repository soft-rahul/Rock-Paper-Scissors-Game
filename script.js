// //! create a function that return a random option

// function computerPlay() {
//     let comOption = ['Rock', 'Paper', 'Scissors'];
//     return comOption[Math.floor(Math.random() * 3)];
// }


// // //!! create another function to take input from user
// function userPlay() {
//     let userOpt = prompt('enter your option : ');
//     return userOpt;
// }


// // //!!! create a function that plays game once
// function playOnce(playerSelection, computerSelection) {
   
//     let userOption = playerSelection.toLowerCase();
//     let computerOption = computerSelection.toLowerCase();

   
//     if (userOption === computerOption) {
//         console.log( 'Tie');
//         return 0;
//     } else {

//         if (userOption === 'rock' && computerOption === 'paper') {
//             console.log( 'You lost ! Paper beats Rock ');
//             return false;
//         } else if (userOption === 'rock' && computerOption === 'scissors') {
//             console.log( 'You Win ! Rock beats Scissors  ');
//             return true;
//         } else if (userOption === 'paper' && computerOption === 'rock') {
//             console.log( 'You Win ! Paper beats Rock ');
//             return true;
//         } else if (userOption === 'paper' && computerOption === 'scissors') {
//             console.log( 'You lost ! Scissors cuts Paper  ');
//             return false;
//         } else if (userOption === 'scissors' && computerOption === 'paper') {
//             console.log( 'You Win !  Scissors beats Paper  ');
//             return true;
//         } else if (userOption === 'scissors' && computerOption === 'rock') {
//             console.log( 'You lost ! Rock beats Scissors ');
//             return false;
//         }

//     }
// }

// //! create main function for game
// function game() {
//     let playerScore = 0,
//         computerScore = 0;
//     let result;
//     let winner;
//     for(let i = 1; i<=5; i++){
//         result = playOnce(userPlay(),computerPlay());
//         if(result===0){
//             i--;
//         }else if(result === true){
//             playerScore++;
//         }else{
//             computerScore++;
//         }
//     }

//     if(playerScore>=3){
//         winner = `Player win!! Player is : ${playerScore} vs Computer is : ${computerScore}`;
//     }else{
//         winner = `Computer win!! Player is : ${playerScore} vs Computer is : ${computerScore}`;
//     }

//     console.log(winner);
// }
// game();


// hide start page and show game page

function showGamePage() {
    const gamePage = document.querySelector('.main');
    const introPage = document.querySelector('.intro');
    gamePage.style.cssText = "display:block";
    introPage.style.cssText ="display:none";
}

const btnOne = document.querySelector('.start__button');
btnOne.addEventListener('click',showGamePage);




// game page logic

function winPage() {
    const parentEle = document.querySelector('.congrats');
    const gamePage = document.querySelector('.main');
    parentEle.style.cssText = "display:flex";
    gamePage.style.display = 'none';
}


function lostPage() {
    const parentEle = document.querySelector('.sad');
    const gamePage = document.querySelector('.main');
    parentEle.style.cssText = "display:flex";
    gamePage.style.display = 'none';
}

