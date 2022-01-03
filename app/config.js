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

//this function will be executed when the form is submitted
function savePlayerConfig(event) { 
    // prevents the default browser behavier to send http request to server
    // that way we can handle the form behavier with javascript
    event.preventDefault();
    // console.dir(event); 

    const formData = new FormData(event.target); // this is built in blueprint 
    // blueprint have his own methods we can access
    // this blueprint takes the form and extract the values automatically for us

    //we acces the input value by its name attribute
    // this gives as the value from input with attribute playername
    const enteredPlayerName = formData.get("playername").trim(); 
    //console.log(enteredPlayerName);

    if (!enteredPlayerName) {  // or (enteredPlayerName === "")
        event.target.firstElementChild.classList.add("error"); 
        errorsOutputElement.textContent = "Please enter a valid name!";
        return; // when used return like this we stop the execution of any code after this
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