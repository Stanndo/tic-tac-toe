const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

let isGameOver = false;
let editedPlayer = 0;
let activePlayer = 0;
let roundNumber = 1;
let countWins1 = 0;
let countWins2 = 0;
const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    },
]
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startGameBtnElement = document.getElementById("start-game-btn");

const configPlayerModal = document.getElementById("config-modal");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const gameBoardElements = document.querySelectorAll("#game-board li");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const playerWinnerElement = document.getElementById("player-winner");
 

editPlayer1BtnElement.addEventListener("click", openConfigPlayer);
editPlayer2BtnElement.addEventListener("click", openConfigPlayer);

cancelConfigBtnElement.addEventListener("click", closeConfigPlayer);
backdropElement.addEventListener("click", closeConfigPlayer);

formElement.addEventListener("submit", savePlayerConfig);

startGameBtnElement.addEventListener("click", startNewGame);

for (const gameBoardElement of gameBoardElements) {
    gameBoardElement.addEventListener("click", selectedBoardElement);
}