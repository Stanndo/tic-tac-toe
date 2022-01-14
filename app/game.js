
function resetGame() {
    isGameOver = false;
    activePlayer = 0;
    roundNumber = 1;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="player-winner"></span>!';
    gameOverElement.style.display = "none";
    

    let gameBoardIndex = 0;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElements[gameBoardIndex];
            gameBoardItemElement.textContent = "";
            gameBoardItemElement.classList.remove("disabled");
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }

  resetGame();

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
  
  if (event.target.tagName !== "LI") { 
        return;
  } 

  if (isGameOver) {
    return;
  }

  const selectedRow = event.target.dataset.row - 1;
  const selectedCol = event.target.dataset.col - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("Please select another field!");
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedCol] = activePlayer + 1;
  // console.log(gameData);

  const winnerId = checkForWinner();
  console.log(winnerId);

  if (winnerId !== 0) {
    gameOver(winnerId);
  }

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
      
      return gameData[0][i];
    }
  }

  // check diagonal from top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
   
    return gameData[0][0];
  }

  // check diagonal from bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
   
    return gameData[2][0];
  }

  // check for draw
  if (roundNumber === 9) {
    return -1;
  }

  return 0;
}

function gameOver(winnerId) {
  isGameOver = true;
  gameOverElement.style.display = "block";


  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    const howManyWinsSpanElement1 = document.getElementById(`win-player-1-span`);
    const howManyWinsSpanElement2 = document.getElementById(`win-player-2-span`);

    if (winnerId === 1) {
      countWins1++;
      howManyWinsSpanElement1.textContent = countWins1;
    } else {
      countWins2++;
      howManyWinsSpanElement2.textContent = countWins2;
    }
    
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    
    console.log(gameOverElement.firstElementChild.firstElementChild)
   
    console.log(winnerName)
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
