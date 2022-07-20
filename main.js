let options = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}

let win = "You Win!"
let lose = "You Lose!"

let cScore = 0
let pScore = 0

document.querySelectorAll('button').forEach((button)=> {
    button.addEventListener('click', (playerSelection, computerSelection) => {
        playerSelection = button.textContent.toUpperCase()
        computerSelection = computerPlay()
                
        let total = document.querySelector('.total')
        let round = document.querySelector('.round')

        if (playerSelection == options[0].toUpperCase() && computerSelection === "Paper") {
            total.innerHTML = `Player: ${pScore}; Computer: ${++cScore}`
            round.innerHTML = `${lose} Paper beats Rock`
        } else if (playerSelection == options[0].toUpperCase() && computerSelection === "Scissors") {
            total.innerHTML = `Player: ${++pScore}; Computer: ${cScore}`
            round.innerHTML = `${win} Rock beats Scissors`
        } else if (playerSelection == options[1].toUpperCase() && computerSelection === "Rock") {
            total.innerHTML = `Player: ${++pScore}; Computer: ${cScore}`
            round.innerHTML = `${win} Paper beats Rock`
        } else if (playerSelection == options[1].toUpperCase() && computerSelection === "Scissors") {
            total.innerHTML = `Player: ${pScore}; Computer: ${++cScore}`
            round.innerHTML = `${lose} Scissors beats Paper`
        } else if (playerSelection == options[2].toUpperCase() && computerSelection === "Rock") {
            total.innerHTML = `Player: ${pScore}; Computer: ${++cScore}`
            round.innerHTML = `${lose} Rock beats Scissors`
        } else if (playerSelection == options[2].toUpperCase() && computerSelection === "Paper") {
            total.innerHTML = `Player: ${++pScore}; Computer: ${cScore}`
            round.innerHTML = `${win} Scissors beats Paper`
        } else {
            total.innerHTML = `Player: ${pScore}; Computer: ${cScore}`
            round.innerHTML = "Error/Tie!"
        }

        if (pScore < cScore && cScore === 5) {
            alert("You lose the game")
            pScore = 0
            cScore = 0
        } else if (pScore > cScore && pScore === 5) {
            alert("You win the game")
            pScore = 0
            cScore = 0
        } else if (pScore === 5 && cScore === 5){
            alert("It's a tie")
            pScore = 0
            cScore = 0
        }
    })
})