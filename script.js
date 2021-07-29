//! create a function that return a random option

function computerPlay() {
    let comOption = ['Rock', 'Paper', 'Scissors'];
    return comOption[Math.floor(Math.random() * 3)];
}


// //!! create another function to take input from user
function userPlay() {
    let userOpt = prompt('enter your option : ');
    return userOpt;
}


// //!!! create a function that plays game once
function playOnce(playerSelection, computerSelection) {
   
    let userOption = playerSelection.toLowerCase();
    let computerOption = computerSelection.toLowerCase();

    /*
        logic of game 
    */
    if (userOption === computerOption) {
        return 'Tie';
    } else {

        if (userOption === 'rock' && computerOption === 'paper') {
            return 'You lost ! Paper beats Rock ';
        } else if (userOption === 'rock' && computerOption === 'scissors') {
            return 'You Win ! Rock beats Scissors  ';
        } else if (userOption === 'paper' && computerOption === 'rock') {
            return 'You Win ! Paper beats Rock ';
        } else if (userOption === 'paper' && computerOption === 'scissors') {
            return 'You lost ! Scissors cuts Paper  ';
        } else if (userOption === 'scissors' && computerOption === 'paper') {
            return 'You Win !  Scissors beats Paper  ';
        } else if (userOption === 'scissors' && computerOption === 'rock') {
            return 'You lost ! Rock beats Scissors ';
        }

    }
}

console.log(playOnce(userPlay(),computerPlay()));