
const pl1BtnElement = document.getElementById("pl1-btn");
const pl2BtnElement = document.getElementById("pl2-btn");

let playerId = 0;


const formElement = document.querySelector("form");

function getToInput(event) {
    console.log(event.target);
    playerId = +event.target.dataset.playerid;
    console.log(playerId);

}

function configPlayers(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData)
    const enteredPlayerName = formData.get("pl-name").trim();
    console.log(enteredPlayerName);

    const playerData = document.getElementById("pl-" + playerId + "-name");
    console.log(playerData);
    playerData.textContent = enteredPlayerName;
}

pl1BtnElement.addEventListener("click", getToInput);
pl2BtnElement.addEventListener("click", getToInput);

formElement.addEventListener("submit", configPlayers);