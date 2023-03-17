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

let gameState = {
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
  gameOver: false,

  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const player1Name = e.target[0].value;
  const player2Name = e.target[1].value;
  gameState.players[0].name = player1Name;
  gameState.players[1].name = player2Name;
  renderScoreBoard();
});
function renderScoreBoard() {
  scoreboard.innerHTML = "";
  for (const player of gameState.players) {
    const playerEl = document.createElement("div");
    playerEl.classList.add("player");
    playerEl.innerHTML = `
    <label> Player: ${player.name}</label>`;
    scoreboard.append(playerEl);
  }
}
renderScoreBoard();

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
    getDraw();
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
      winningMessage();
    }
  }
}

function checkColumn() {
  for (let j = 0; j < gameState.board.length; j++) {
    if (
      gameState.board[0][j] !== "" &&
      gameState.board[0][j] === gameState.board[1][j] &&
      gameState.board[1][j] === gameState.board[2][j]
    ) {
      winningMessage();
    }
  }
}

function checkDiagonals() {
  if (
    gameState.board[0][0] !== "" &&
    gameState.board[0][0] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][2]
  ) {
    winningMessage();
  } else if (
    gameState.board[0][2] !== "" &&
    gameState.board[0][2] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][0]
  ) {
    winningMessage();
  }
}
function getDraw() {
  // make a for loop through every position on board
  for (let i = 0; i < gameState.board.length; i++) {
    for (let j = 0; j < gameState.board.length; j++) {
      const currentCell = gameState.board[i][j];
      if (currentCell === "") {
        return;
      }
    }
  }
  alert("It's a Draw!!");
}

restartButton.addEventListener("click", resetBoard);

function resetBoard() {
  console.log("restarts");
  gameState = {
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
    gameOver: false,

    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  };
  renderBoard();
}

function winningMessage() {
  alert(
    `${gameState.players[gameState.currentPlayerIndex].name} is the winner!!!!!`
  );
}

function playComputer() {
  let emptyPositionFound = false;
  while (!emptyPositionFound) {
    const rowIdx = Math.floor(Math.random() * 3);
    const colIdx = Math.floor(Math.random() * 3);

    // check if that position in the board is empty
    if (gameState.board === "") {
      emptyPositionFound = true;
    }

    //if it is, reset emptyPositionFound = true
    // then play the computer move
  }
  switchPlayer();
}
