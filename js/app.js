/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner






/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".square")
//console.log(squareEls)

const messageEl = document.querySelector("h2")


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach
squareEls.forEach(square => {
  square.addEventListener("click", handleClick)
  
});
// this is 


/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, -1, null, null, null, null, null, null, null]
  turn = 1 // represents player x 
  winner = null // null = no winner, 1 = x won, -1 = o won. "T a tie occured, anything else = game over."
  render ()

  
}

function render () {
  board.forEach((square, i)=> {
   if (square === 1) {
     squareEls[i].textContent = "X"
  } 
   if (square === -1) {
    squareEls[i].textContent = "O"
  }
  
})  
  renderMessage()
} 
function renderMessage() {
  if(winner === null) {
    messageEl.textContent = `It is player ${turn === 1 ? "X": "O"}'s turn!`
  } else if (winner === "T") {
    messageEl.textContent = `It's a tie`
  } else {
    messageEl.textContent = `Player ${turn === 1 ? "0": "X"} won`
  }


  }
  function handleClick(evt) {
  const sqIdx = evt.target.id.substring(2)
    if (board[sqIdx] !== null || winner !== null) {
   }
   return
   
    
  }

  
