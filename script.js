// UNDERSTAND
// PLAN
// SOLVE

/* UNDERSTAND:
This is a rock paper scissors game that will be played against the computer in the console. The user will be prompted for an input (rock, paper or scissors). The computer will randomly generate an output of either rock, paper or scissors. A function will take in both the users choice and the computers choice to determine the winner of that round. The game will include 5 rounds. The results will be returned with the winner declared.
*/

/*PLAN:
1. prompt the user and store their answer: 

userChoice = prompt("Enter rock, paper or scissors");

-------------------------------------------------------------------------

2. create a function getComputerChoice() which generates a random rock, paper or scissors value:

function getComputerChoice() {

    // generates a random number between 1 and 3 and stores in randomNum
    let randomNum = Math.floor(Math.random() * (3) + 1)


    // This stores the computers choice
    let computerChoice = ''


    // This logic assigns random numbers 1 - 3 to scissor, paper, and rock values
    if (randomNum === 1) {
        computerChoice === Scissors
    }
    else if (randomNum === 2) {
        computerChoice === Paper
    }
    else if (randomNum === 3) {
        computerChoice === Rock
    }
    else {
        return 'Error with computerChoice function'
    }

    return computerChoice
}
-------------------------------------------------------------------------------

3. Create a function playRound() which takes both the user and computers choices as parameters and calculates the winner:

function playRound(userSelection, computerSelection) {
    
    // Winning conditions for the user
    if (userSelection === Scissors && computer Selection === Paper) {
        return 'You win! Scissors beats Paper'
    } 
    else if (userSelection === Paper && computerSelection === rock) {
        return 'You win! Paper beats Rock'
    }
    else if (userSelection === Rock && computerSelection === Scissors) {
        return 'You win! Rock beats Scissors'
    }
    
    // Tie scenario
    else if (userSelection === computerSelection) {
        return 'Tie!'
    }

    // If the above conditions aren't true then you lose
    else {
        return 'You lose!'
    }
    
}
--------------------------------------------------------------------------------

4. 

5. 

*/
