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






/*---------------------------- Variables (state) ----------------------------*/
const squareEls = document.querySelectorAll(".square")
//console.log(squareEls)

const messageEl = document.querySelector("h2")
const resetBtnEl = document.querySelector("button")


/*----------------------------- Event Listeners -----------------------------*/


squareEls.forEach(square => {
square.addEventListener("click", handleClick)

});
resetBtnEl.addEventListener("click", init)



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
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
    if (!square) {
    squareEls[i].textContent = ""
  }

  
  
})  
  renderMessage()
} 
function renderMessage() {
  if(winner === null) {
    messageEl.textContent = `It is player ${turn === 1 ? "X": "O"}'s turn!`
  } else if (winner === "T") {
    messageEl.textContent = `It's a tie!`
  } else {
    messageEl.textContent = `Player ${turn === 1 ? "0": "X"} won !!`
  }


  }
  function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.substring(2))
    if (board[sqIdx] !== null || winner !== null) {
      return 
   }
   board[sqIdx] = turn
   console.log()
   turn = turn * -1
   getWinner()
   render()
  
  }

  function getWinner(){ 
    winningCombos.forEach(function(winCombs) { 
      let sum = board[winCombs[0]] + board[winCombs[1]] + board[winCombs[2]]
      // if (Math.abs(sum) === 3) {
      if (sum === 3) {
        winner = "X"
      }
      if (sum === -3) {
        winner = "O"
      } else if (board.includes(null)=== false) {
         winner = "T"
      
      }
      else {
        return null 
      }
      
      
      

    })


  }
  
