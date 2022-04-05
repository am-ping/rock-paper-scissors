let options = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}

let win = "You Win!"
let lose = "You Lose!"

let cScore = 0
let pScore = 0

        function playRound(playerSelection, computerSelection) {
            playerSelection = prompt("State your weapon")
            playerSelection = playerSelection.toUpperCase()

            computerSelection = computerPlay()
            
            if (playerSelection == options[0].toUpperCase() && computerSelection === "Paper") {
                console.log(`Player: ${pScore}; Computer ${++cScore}`)
                return `${lose} Paper beats Rock`
            } else if (playerSelection == options[0].toUpperCase() && computerSelection === "Scissors") {
                console.log(`Player: ${++pScore}; Computer ${cScore}`)
                return `${win} Rock beats Scissors`

            } else if (playerSelection == options[1].toUpperCase() && computerSelection === "Rock") {
                console.log(`Player: ${++pScore}; Computer ${cScore}`)
                return `${win} Paper beats Rock`
            } else if (playerSelection == options[1].toUpperCase() && computerSelection === "Scissors") {
                console.log(`Player: ${pScore}; Computer ${++cScore}`)
                return `${lose} Scissors beats Paper`

            } else if (playerSelection == options[2].toUpperCase() && computerSelection === "Rock") {
                console.log(`Player: ${pScore}; Computer ${++cScore}`)
                return `${lose} Rock beats Scissors`
            } else if (playerSelection == options[2].toUpperCase() && computerSelection === "Paper") {
                console.log(`Player: ${++pScore}; Computer ${cScore}`)
                return `${win} Scissors beats Paper`
                
            } else {
                console.log(`Player: ${pScore}; Computer ${cScore}`)
                return "Error/Tie!"
            }
        }

        function game() {
            for (let i = 0; i < 5; i++) {
                playRound()
            }
            if (pScore < cScore) {
                return "You lose the game"
            } else if (pScore > cScore) {
                return "You win the game"
            } else {
                return "It's a tie"
            }
        }
    
