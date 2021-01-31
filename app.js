const choices = document.querySelectorAll('.choice')
const score = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')
const scoreBoard = {
    player: 0,
    computer: 0
}

//play game

function play(e) {
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice, computerChoice)
    showWinner(winner, computerChoice)
}

// get winner

function getWinner(p, c) {
    if (p === c) {
        return 'draw'
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer'
        } else {
            return 'player'
        }
    }
}

//get computer's choice

function getComputerChoice() {
    const rand = Math.random()
    if (rand < 0.34) {
        return 'rock'
    } else if (rand <= 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//function show winner

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        //increment player score
        scoreBoard.player++;

        //show modal
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    } else if (winner === 'computer') {
        //increment player score
        scoreBoard.computer++;

        //show modal
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    } else {
        //show modal
        result.innerHTML = `
        <h1>It's a Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    }

    //show score
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}
    <p>Computer: ${scoreBoard.computer}
    `

    //show the modal
    modal.style.display = 'block'
}

//clear modal

function clearModal(e) {
    if (e.target === modal) {
        modal.style.display = 'none'
    }
}

//restart game
function restartGame() {
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.innerHTML = `
    <p>Player: 0
    <p>Computer: 0
    `
    restart.style.display = 'none'
}

//event listener

choices.forEach(choice => choice.addEventListener('click', play))
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)