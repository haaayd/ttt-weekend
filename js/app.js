/*-------------------------------- Constants --------------------------------*/
const players 


/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner



// to represent the state of the squares on the board 
// to track whose turn it is 
 // to represent if anyone has won yet, or if its a tie 


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".square")
//console.log(squareEls)

const messageEl = document.querySelector("h2")
console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1 // represents player x 
  winner = null // null = no winner, 1 = x won, -1 = o won. "T a tie occured, anything else = game over."



  render()
}

