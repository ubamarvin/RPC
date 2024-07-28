console.log("Test This")

const RPC = ["rock", "paper", "scissor"]
const MAX_ROUNDS = 5
let playerScore = 0
let computerScore = 0



function getComputerChoice() {
    return RPC[Math.floor(Math.random() * 3 )]
}
//console.log(getComputerChoice())

function getPlayerChoice() {
    let choice;
    while(true){
        choice = prompt("Choose 'Rock', 'Paper' or 'Scissor'").toLowerCase()
        if(RPC.includes(choice))
            break;
    }
    return choice
}

//console.log(getPlayerChoice())

function evalRound(choiceA, choiceB){
    if(choiceA == "rock" && choiceB == "scissor")
        return 1
    else if(choiceA == "paper" && choiceB == "rock")
        return 1
    else if(choiceA == "scissor" && choiceB == "paperrock")
        return 1
    else if(choiceA == choiceB)
        return 0
    else
        return -1
}

function playRound(){
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()
    let roundResult = evalRound(playerChoice, computerChoice)
    if ( roundResult == 1) {
        console.log(`Player won! ${playerChoice} beats ${computerChoice}`)
        playerScore++
    }
    else if ( roundResult == -1) {
        console.log(`Computer won! ${computerChoice} beats ${playerChoice}`)
        computerScore++
    }
    else
        console.log(`Its a draw, players ${playerChoice} draws computers ${computerChoice}` )
    
}

function anounceWinner(pScore, cScore){
    if (pScore == cScore)
        return `Its a draw: ${pScore} ${cScore}`
    else if (pScore > cScore)
        return `Player won: ${pScore} ${cScore}`
    else
        return `Computer won: ${pScore} ${cScore}`

}

function playGame() {
    numberOfRoundsPlayed = 0;
    while(numberOfRoundsPlayed < MAX_ROUNDS){
        playRound()
        numberOfRoundsPlayed++;
    }
    console.log(`PlayerScore: ${playerScore}`)
    console.log(`ComputerScore: ${computerScore}`)
    console.log(anounceWinner(playerScore, computerScore))

}



playGame()
