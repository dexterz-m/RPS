
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

    console.log("Computer: ",computerChoice)

    return computerChoice

}

// Player choice

function getPlayerChoice(){
    let playerChoice = prompt("Enter Rock, Papper or Scissors: ").toLowerCase()
    console.log("Player: ",playerChoice)
    return playerChoice
}

// Start round

function startRound(){

    let wins
    let loses
    let draws

    const player = getPlayerChoice()
    const computer = getComputerChoice()

    // Player win condition

    if(player == "rock" & computer == "scissors"){
        wins ++
        console.log("Player wins!")
    }

    else if(player == "paper" & computer == "rock"){
        wins ++
        console.log("Player wins!")
    }

    else if(player == "scissors" & computer == "paper"){
        wins ++
        console.log("Player wins!")
    }

    // Computer win condition

    else if(computer == "rock" & player == "scissors"){
        loses ++
        console.log("Computer wins!")
    }

    else if(computer == "paper" & player == "rock"){
        loses ++
        console.log("Computer wins!")
    }

    else if(computer == "scissors" & player == "paper"){
        loses ++
        console.log("Computer wins!")
    }

    // Draw condition

    else if(computer == player){
        draws ++
        console.log("Draw!")
    }

}

startRound()