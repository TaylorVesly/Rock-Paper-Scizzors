"use strict";

/* OVERVIEW:
This is a rock paper scissors game that will be played against the computer in the console.
The user will be prompted for an input (rock, paper or scissors). The computer will randomly generate an output of either rock, paper or scissors. 
A function will take in both the users choice and the computers choice to determine the winner of that round. The game will include 5 rounds. 
The results will be returned with the winner declared. */

// This stores the users input and converts it all to lower case
let userInput = prompt("Enter Rock, Paper or Scissors").toLowerCase();
// This capitalizes the first letter of the users input
let userChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);

function getComputerChoice() {
  // generates a random number between 1 and 3 and stores in randomNum
  let randomNum = Math.floor(Math.random() * 3 + 1);

  // This stores the computers choice
  let computerChoice = "";

  // This logic assigns random numbers 1 - 3 to scissor, paper, and rock values
  if (randomNum === 1) {
    computerChoice = "Scissors";
  } else if (randomNum === 2) {
    computerChoice = "Paper";
  } else if (randomNum === 3) {
    computerChoice = "Rock";
  } else {
    return "Error with getComputerChoice function";
  }
  return computerChoice;
}

// This keeps score of each round the user and computer win. score increments by 1 if round is won
let userScore = 0;
let computerScore = 0;

function playRound(userSelection, computerSelection) {
  // Winning conditions for the user
  if (userSelection === "Scissors" && computerSelection === "Paper") {
    userScore++;
    return "You win! Scissors beats Paper";
  } else if (userSelection === "Paper" && computerSelection === "Rock") {
    userScore++;
    return "You win! Paper beats Rock";
  } else if (userSelection === "Rock" && computerSelection === "Scissors") {
    userScore++;
    return "You win! Rock beats Scissors";
  }
  // Tie scenario
  else if (userSelection === computerSelection) {
    return "Tie!";
  }

  // If the above conditions aren't true then the user loses
  else {
    computerScore++;
    return "You lose!";
  }
}


/*
function game() {
    
    // This loops through the playRound() function 5 times
    for (let i = 0; i < 5; i++) {
        function playRound(userChoice, getComputerChoice());
    }

    // if the user won at least 3 out of 5 rounds they won, if not they lost
    if (userScore >= 3) {
        return 'Victory!'
    }
    else {
        return 'Defeat!'
    }
}

*/

// Might have to move userChoice into the playRound() function. It's currently at the top of document.
