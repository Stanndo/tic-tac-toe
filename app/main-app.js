let editedPlayer = 0;
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

const configPlayerModal = document.getElementById("config-modal");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");

editPlayer1BtnElement.addEventListener("click", openConfigPlayer);
editPlayer2BtnElement.addEventListener("click", openConfigPlayer);

cancelConfigBtnElement.addEventListener("click", closeConfigPlayer);
backdropElement.addEventListener("click", closeConfigPlayer);

formElement.addEventListener("submit", savePlayerConfig);
