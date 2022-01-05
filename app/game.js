function startNewGame() {
  /* if (players[0].name === "" || players[1].name === "") {
        alert("Please set custom player names for both players!")
        return;
    } */
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  //console.log(activePlayer);
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectedBoardElement(event) {
  console.log(event.target);
  // this is if we accidently click on empty space between list items
  /* if (event.target.tagName !== "LI") { 
        return;
    } */
  const selectedRow = event.target.dataset.row - 1;
  const selectedCol = event.target.dataset.col - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("Please select another field!");
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  // event.target.removeEventListener("click", selectedBoardElement);

  //console.log(selectedRow + 1);
  //console.log(selectedCol + 1);

  gameData[selectedRow][selectedCol] = activePlayer + 1;
  // console.log(gameData);

  const winnerId = checkForWinner();
  console.log(winnerId);
  roundNumber++;
  switchPlayer();
}

function checkForWinner() {
  // check for winner in a row
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      //console.log("win");
      //console.log(gameData[i][0]);
      return gameData[i][0];
    }
  }

  // check for winner in a column
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      //console.log("win");
      //console.log(gameData[0][i]);
      return gameData[0][i];
    }
  }

  // check diagonal from top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    //console.log("win");
    //console.log(gameData[0][0]);
    return gameData[0][0];
  }

  // check diagonal from bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    //console.log("win");
    //console.log(gameData[2][0]);
    return gameData[2][0];
  }

  // check for draw
  if (roundNumber === 9) {
      return -1;
  }

  return 0;
}
