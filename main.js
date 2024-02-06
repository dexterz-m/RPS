
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

    let wins = 0
    let loses = 0
    let draws = 0

    for (let i = 0; i < 10; i++){

        const player = getPlayerChoice()
        const computer = getComputerChoice()

        // Player win condition

        if(player == "rock" & computer == "scissors"){
            console.log("Player wins!")
            wins ++
        }

        else if(player == "paper" & computer == "rock"){
            console.log("Player wins!")
            wins++
        }

        else if(player == "scissors" & computer == "paper"){
            console.log("Player wins!")
            wins++
        }

        // Computer win condition

        else if(computer == "rock" & player == "scissors"){
            console.log("Computer wins!")
            loses++
        }

        else if(computer == "paper" & player == "rock"){
            console.log("Computer wins!")
            loses++
        }

        else if(computer == "scissors" & player == "paper"){
            console.log("Computer wins!")
            loses++
        }

        // Draw condition

        else if(computer == player){
            console.log("Draw!")
            draws++
        }

        // Score output

        console.log("Wins :",wins)
        console.log("Loses :",loses)
        console.log("Draws :",draws)
    }

    // Results

    console.log("Results:")
    console.log("Wins :",wins)
    console.log("Loses :",loses)
    console.log("Draws :",draws)

}

startRound()