
// RPS JS code

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

    console.log(computerChoice)

}

// Player choice

function getPlayerChoice(){
    let playerChoice = prompt("Enter Rock, Papper or Scissors: ").toLowerCase()

}

// Start round

function startRound(playerChoice, computerChoice){

    let wins
    let loses
    let draws

    // Player win condition

    if(playerChoice == "rock" & computerChoice == "scissors"){
        wins ++
        console.log("Player wins!")
    }

    else if(playerChoice == "paper" & computerChoice == "rock"){
        wins ++
        console.log("Player wins!")
    }

    else if(playerChoice == "scissors" & computerChoice == "paper"){
        wins ++
        console.log("Player wins!")
    }



}

getComputerChoice()
getPlayerChoice()