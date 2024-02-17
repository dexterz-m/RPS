
// RPS JS code

// Assignments

// Result counter

let wins = 0
let loses = 0
let draws = 0

// Divs

const container = document.querySelector('#results');
const table = document.querySelector('#table');

// H1

const computerText = document.createElement('h2');
const playerText = document.createElement('h2');
const winner = document.createElement('h2');
let win = document.createElement('h2');
let lose = document.createElement('h2');
let draw = document.createElement('h2');

// Computer choice

function getComputerChoice(){
    let computerChoice = Math.random() * 3
    computerChoice = Math.floor(computerChoice)

    if(computerChoice == 0){
        computerChoice = "rock"
    }

    else if(computerChoice == 1){
        computerChoice = "paper"
    }

    else{
        computerChoice = "scissors"
    }

    computerText.textContent = "Computer: " + computerChoice;
    

    return computerChoice

}

// Player choice

function getPlayerChoice(element){

    let playerChoice = ""
    
    if(element == 1){
        playerChoice = "rock"
    }

    else if(element == 2){
        playerChoice = "paper";
    }

    else{
        playerChoice = "scissors"
    }


    playerText.textContent = "Player choosed : "+ playerChoice;

    return playerChoice
}

// Start round

function startRound(){

    const player = getPlayerChoice()
    const computer = getComputerChoice()


    // Player win condition

    if(player == "rock" & computer == "scissors"){
        winner.textContent = "Player won!"
        wins ++
    }

    else if(player == "paper" & computer == "rock"){
        winner.textContent = "Player won!"
        wins++
    }

    else if(player == "scissors" & computer == "paper"){
        winner.textContent = "Player won!"
        wins++
    }

    // Computer win condition

    else if(computer == "rock" & player == "scissors"){
        winner.textContent = "Computer won!"
        loses++
    }

    else if(computer == "paper" & player == "rock"){
        winner.textContent = "Computer won!"
        loses++
    }

    else if(computer == "scissors" & player == "paper"){
        winner.textContent = "Computer won!"
        loses++
    }

    // Draw condition

    else if(computer == player){
        winner.textContent = "Draw!"
        draws++
    }

    win.textContent = "wins: "+ wins;
    lose.textContent = "loses: "+ loses;
    draw.textContent = "draws: "+ draws;

    container.appendChild(playerText);
    container.appendChild(computerText);

    table.appendChild(winner);
    table.appendChild(win);
    table.appendChild(lose);
    table.appendChild(draw);

    }
