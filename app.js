const board = document.querySelector("#board");
const cell = document.querySelector(".cell");
const restartButton = document.querySelector("#restartButton");
const scoreboard = document.querySelector("#scoreBoard");
const nameBtnX = document.querySelector("#nameBtnX");
const nameBtnO = document.querySelector("#nameBtnO");
const nameX = document.querySelector("#nameX");
const nameO = document.querySelector("#nameO");
const playerName = document.querySelector(".player");
const playerOption = document.querySelector("#player-option");

const gameState = {
  players: [
    {
      name: "",
      user: ["x", "o"],
      score: 0,
    },
    {
      name: "",
      user: ["x", "o"],
      score: 0,
    },
  ],
  currentPlayerIndex: 0,

  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};
function renderScoreBoard() {
  scoreboard.innerHTML = "";
  for (const player of gameState.players) {
    const playerEl = document.createElement("div");
    playerEl.classList.add("player");
    playerEl.innerHTML = `
    <label> Player: ${player.name}</label>
    <p>Score: ${player.score}</p>`;
    scoreboard.append(playerEl);
  }
}
renderScoreBoard();

nameBtnX.addEventListener("click", function () {
  gameState.players[0].name = nameX.value;
  renderScoreBoard();
});

nameBtnO.addEventListener("click", function () {
  gameState.players[1].name = nameO.value;
  renderScoreBoard();
});

playerOption.addEventListener("change", (event) => {
  console.log(event.target.value);
  if (event.target.value === "Player O") {
    gameState.currentPlayerIndex = 0;
  } else {
    gameState.currentPlayerIndex = 1;
  }
});
function switchPlayer() {
  if (gameState.currentPlayerIndex === 0) {
    gameState.currentPlayerIndex = 1;
  } else {
    gameState.currentPlayerIndex = 0;
  }
}
function onBoardClick(e) {
  //insert player selected
  const row = e.target.id[0];
  const col = e.target.id[1];
  console.log(row, col);
  if (gameState.board[row][col] === "") {
    gameState.board[row][col] = gameState.currentPlayerIndex === 0 ? "O" : "X";
    renderBoard();
    checkWin();
    switchPlayer();
  }
}
board.addEventListener("click", onBoardClick);

function renderBoard() {
  console.log("click");
  for (let i = 0; i < gameState.board.length; i++) {
    for (let j = 0; j < gameState.board[i].length; j++) {
      const square = document.getElementById(`${i}${j}`);
      square.innerText = gameState.board[i][j];
    }
  }
}
function checkWin() {
  checkRow();
  checkColumn();
  checkDiagonals();
}

function checkRow() {
  for (let i = 0; i < gameState.board.length; i++) {
    if (
      gameState.board[i][0] !== "" &&
      gameState.board[i][0] === gameState.board[i][1] &&
      gameState.board[i][1] === gameState.board[i][2]
    ) {
      console.log("winner!!!!");
    }
  }
}

function checkColumn() {
  for (let j = 0; j < gameState.board.length; j++) {
    if (
      gameState.board[j][0] !== "" &&
      gameState.board[0][j] === gameState.board[1][j] &&
      gameState.board[1][j] === gameState.board[2][j]
    ) {
      console.log("winnner!");
    }
  }
}

function checkDiagonals() {
  for (let j = 0; j < gameState.board.length; j++) {
    if (
      gameState.board[j][0] !== "" &&
      gameState.board[0][0] === gameState.board[1][1] &&
      gameState.board[1][1] === gameState.board[2][2]
    ) {
      console.log("Winner!");
    } else if (
      gameState.board[j][0] !== "" &&
      gameState.board[0][2] === gameState.board[1][1] &&
      gameState.board[1][1] === gameState.board[2][0]
    ) {
      console.log("win!");
    }
  }
}
function checkDraw() {}
function resetBoard() {}
restartButton.addEventListener("click", resetBoard);

function winningMessage() {
  alert("Winner!!!!!");
}
