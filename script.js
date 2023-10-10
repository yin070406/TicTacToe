const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4 ,8],
    [2, 4 ,6],
]

let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X";
let running = false;

Game();

const Game = function(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restart);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

const cellClicked = function(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this ,cellIndex)
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

const changePlayer = function(){
    currentPlayer
}

const checkWinner = function(){

}

const restart = function(){

}
