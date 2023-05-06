// function getComputerChoice(){
//   let arr=['rock','paper','sessers'];
//   return arr[Math.floor(arr.length * Math.random())];
  
// }
// getComputerChoice();
// console.log(getComputerChoice());

// let test = getComputerChoice();

// function the_selections(playerSelection , test) {

// let arr=['rock','paper','sessers'];
//   if (test ==  'rock') {
//   console.log('draw');
// }
// if (test ==  'paper') {
//   console.log('computer wins');
// }
// else{
//   console.log('you win');
// }
// }

// the_selections('rock' , getComputerChoice);



function getComputerChoice(){
  let arr=['rock','paper','scissors'];
  return arr[Math.floor(arr.length * Math.random())];
}



function the_selections(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log('draw');
  } else if (computerSelection == 'paper' && playerSelection == 'rock' ||
             computerSelection == 'rock' && playerSelection == 'scissors' ||
             computerSelection == 'scissors' && playerSelection == 'paper') {
    console.log('computer wins');
  } else  {
    console.log('you win');
  }
    if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ){
    console.log("you win")
  }
}

for (let i = 0; i < 6; i++) {
  console.log(getComputerChoice());
  let computerSelection = getComputerChoice();
let playerSelection = prompt('Enter your choice: rock, paper, or scissors');
the_selections("rock", computerSelection);
}



