const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const compSelect = document.getElementById('computerSelect');
const playerSelect = document.getElementById('playerSelect');
const message = document.getElementById('message');
let gameActive = false;
const computeroptionchoice = ["Rock", 'Paper', 'Scissor']
let scoreplayer = Number(localStorage.getItem('playercount')) || 0
let scorecom = Number(localStorage.getItem('computercount')) || 0
const co = document.getElementById('computerscoreaaa')
const pl = document.getElementById("playerscoreaaa")
let newimage1 = document.getElementById('tie1')
let newimage2 = document.getElementById("tie2")
let newimage3 = document.getElementById('player')
let newimage4 = document.getElementById("pc")
let newimage5 = document.getElementById('games')
let newimage6 = document.getElementById("rock")
const playerresult = document.getElementById('playerwinresult')
const computerresult = document.getElementById('computerwinresult')
const drawresult = document.getElementById("drawresult")
const buttonschoice = document.getElementById('buttonchoice')
const winpage=document.getElementById('winpage')
function optioninput(playerChoice) {
    let max = 3
    let computerChoice = computeroptionchoice[Math.floor(Math.random() * max)]
    if (playerChoice === computerChoice) {
        newimage1.src =`./images/${playerChoice}.png`
        newimage1.style.width = '60px'
        newimage1.style.paddingTop = '16px'
        newimage2.src = `./images/${computerChoice}.png`
        newimage2.style.width = '60px'
        newimage2.style.paddingTop = '16px'
        buttonschoice.style.display = 'none'
        drawresult.style.display = 'flex'
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        scoreplayer += 1
        localStorage.setItem('playercount', scoreplayer)
        newimage3.src = `./images/${playerChoice}.png`
        newimage3.style.width = '60px'
        newimage3.style.paddingTop = '16px'
        newimage4.src = `./images/${computerChoice}.png`
        newimage4.style.width = '60px'
        newimage4.style.paddingTop = '16px'
        buttonschoice.style.display = 'none'
        winpage.style.display='block'
        playerresult.style.display = 'flex'
    } else {
        scorecom += 1
        localStorage.setItem('computercount', scorecom)
        newimage5.src = `./images/${playerChoice}.png`
        newimage5.style.width = '60px'
        newimage5.style.paddingTop = '16px'
        newimage6.src = `./images/${computerChoice}.png`
        newimage6.style.width = '60px'
        newimage6.style.paddingTop = '16px'
        buttonschoice.style.display = 'none'
        computerresult.style.display = 'flex'
    }
    updatevalue()
    console.log('computer=', computerChoice, 'Player=', playerChoice)
}

document.addEventListener('DOMContentLoaded', () => {
    updatevalue()
})
function updatevalue() {
    co.textContent = `${scorecom}`
    pl.textContent = `${scoreplayer}`
}
window.addEventListener('storage', (event) => {
    if ((event.key === 'playercount') || event.key === 'computerconut') {
        scoreplayer = Number(localStorage.getItem('playercount'))
        scorecom = Number(localStorage.getItem('computercount'))
    }
    updatevalue()
})
function playagainbutton() {
    playerresult.style.display='none'
    computerresult.style.display='none'
    drawresult.style.display='none'
    buttonschoice.style.display='block'
    winpage.style.display='none'

}

function handlerulebox(){
    const rulebox=document.getElementById('ruleboxcontainer')
    rulebox.style.display='block'
    
}
function handleruleboxclose(){
    const rulebox=document.getElementById('ruleboxcontainer')
    rulebox.style.display='none'
}
console.log(scorecom)