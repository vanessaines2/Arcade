const board = document.querySelector("#board");
const cell = document.querySelector(".cell");
const restartButton = document.querySelector("#restartButton");
const scoreboard = document.querySelector("#scoreBoard");
const nameBtnX = document.querySelector("#nameBtnX");
const nameBtnO = document.querySelector("#nameBtnO");
const nameX = document.querySelector("#nameX");
const nameO = document.querySelector("#nameO");
const playerName = document.querySelector(".player");
const playerSelected = document.querySelector("#player-select");

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

function initialState() {
  playerSelected.addEventListener("click", () => {
    //select first player, make them go first
  });
  //then for each cell they click on pass by a function
  cell.forEach((cell) => {
    cell.addEventListener("click", onBoardClick);
  });
}
function onBoardClick() {
  console.log("clicked");
  //first player selected
  //cell clicked on --
  // if empty insert their value
  //check if win or draw
  // else switch
}
function resetBoard() {}
restartButton.addEventListener("click", resetBoard);
