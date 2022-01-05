
const pl1BtnElement = document.getElementById("pl1-btn");
const pl2BtnElement = document.getElementById("pl2-btn");

let playerId = 0;


const formElement = document.querySelector("form");

function getToInput(event) {
    console.log(event.target);
    playerId = event.target.dataset.playerid;

}

function configPlayers(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const playerData = formData.get("pl-name");
    console.log(playerData);

    const playerNameEl = document.getElementById(`pl-${playerId}-name`);
    playerNameEl.innerText = playerData;
   
}

pl1BtnElement.addEventListener("click", getToInput);
pl2BtnElement.addEventListener("click", getToInput);

formElement.addEventListener("submit", configPlayers);