function openConfigPlayer(event) {
    const selectedPlayerId = event.target.dataset.playerid;
    editedPlayer = +selectedPlayerId; // the + symbol infront converts the string type to number type
    console.log(editedPlayer);
    configPlayerModal.style.display = "block";
    backdropElement.style.display = "block";
}

function closeConfigPlayer() {
    configPlayerModal.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.children[0].children[1].value = "";
}


function savePlayerConfig(event) { 
    
    event.preventDefault(); 

    const formData = new FormData(event.target);

    const enteredPlayerName = formData.get("playername").trim(); 
    
    if (!enteredPlayerName) { 
        event.target.firstElementChild.classList.add("error"); 
        errorsOutputElement.textContent = "Please enter a valid name!";
        return; 
    }

    const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`);
    console.log(updatedPlayerDataElement);
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    // 1 way of writing this
    if (editedPlayer === 1) {
        players[0].name = enteredPlayerName;
    } else {
        players[1].name = enteredPlayerName;
    }
    // 2 way of writing the same above
    // players[editedPlayerId - 1].name = enteredPlayerName;

    closeConfigPlayer();
}