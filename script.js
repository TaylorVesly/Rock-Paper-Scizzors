"use strict";

/* OVERVIEW:
This is a rock paper scissors game that will be played against the computer in the console.
The user will be prompted for an input (rock, paper or scissors). The computer will randomly generate an output of either rock, paper or scissors. 
A function will take in both the users choice and the computers choice to determine the winner of that round. The game will include 5 rounds. 
The results will be returned with the winner declared. */

function game() {
  let userScore = 0;

  let computerScore = 0;

  function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3 + 1);

    let computerChoice = "";

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

  let userChoice = "";

  function playRound(userSelection, computerSelection) {
    let userInput = prompt("Rock, Paper or Scissors").toLowerCase();
    userChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);

    if (userSelection === "Scissors" && computerSelection === "Paper") {
      userScore++;
      console.log("You win! Scissors beats Paper");
    } else if (userSelection === "Paper" && computerSelection === "Rock") {
      userScore++;
      console.log("You win! Paper beats Rock");
    } else if (userSelection === "Rock" && computerSelection === "Scissors") {
      userScore++;
      console.log("You win! Rock beats Scissors");
    } else if (userSelection === computerSelection) {
      console.log("Tie!");
    } else {
      computerScore++;
      console.log("You lose!");
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(userChoice, getComputerChoice());
  }

  console.log("Your score: " + userScore);
  console.log("Computers score: " + computerScore);

  if (userScore > computerScore) {
    console.log("VICTORY!");
  } else if (userScore === computerScore) {
    console.log("DRAW!");
  } else {
    console.log("DEFEAT!");
  }
}

game();
