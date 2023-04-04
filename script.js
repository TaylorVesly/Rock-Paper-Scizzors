"use strict";

/* OVERVIEW:
This is a rock paper scissors game that will be played against the computer in the console.
The user will be prompted for an input (rock, paper or scissors). The computer will randomly generate an output of either rock, paper or scissors. 
A function will take in both the users choice and the computers choice to determine the winner of that round. The game will include 5 rounds. 
The results will be returned with the winner declared. */

function game() {
  // This stores the users input and converts it all to lower case
  let userInput = prompt("Enter Rock, Paper or Scissors").toLowerCase();
  // This capitalizes the first letter of the users input
  let userChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);

  // This stores the users score and increments by 1 if user wins round
  let userScore = 0;
  // This stores the computers score and increments by 1 if computer wins round
  let computerScore = 0;
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
      return "Error with getComputerChoice()";
    }
    return computerChoice;
  }

  function playRound(userSelection, computerSelection) {
    // Winning conditions for the user
    if (userSelection === "Scissors" && computerSelection === "Paper") {
      userScore++;
      console.log("You win! Scissors beats Paper");
    } else if (userSelection === "Paper" && computerSelection === "Rock") {
      userScore++;
      console.log("You win! Paper beats Rock");
    } else if (userSelection === "Rock" && computerSelection === "Scissors") {
      userScore++;
      console.log("You win! Rock beats Scissors");
    }
    // Tie scenario
    else if (userSelection === computerSelection) {
      console.log("Tie!");
    }

    // If the above conditions aren't true then the user loses
    else {
      computerScore++;
      console.log("You lose!");
    }
  }

  // This loops through the playRound() function 5 times
  for (let i = 0; i < 5; i++) {
    playRound(userChoice, getComputerChoice());
  }

  console.log("Your score: " + userScore);
  console.log("Computers score: " + computerScore);

  // if the userScore is greater than the computerScore than you win
  if (userScore > computerScore) {
    console.log("VICTORY!");
  } else if (userScore === computerScore) {
    console.log("DRAW!");
  } else {
    console.log("DEFEAT!");
  }
}

game();

// the user needs to be able to put in 5 inputs

// currently the user puts in 1 input but the computer has 5 inputs
