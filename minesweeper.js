document.addEventListener('DOMContentLoaded', startGame)
// Build a board of individual cells grouped into rows and columns
// Individually, or write a for loop?
// Build functions to open/flag/mine cells (booleans?)
// Build a function to randomly place mines
// Build the ancilary functions (mine count+counter)

// Define your `board` object here!

// var myObject = {}; // Object literal (preferred way)
// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method
// define the board object
// add property names (keys)to the object called board
var board = {
  cells: [{ 
    row: 0,
    col: 0,
    isMine: false,
    hidden: true,
  }, 
  { 
    row: 0,
    col: 1,
    isMine: false,
    hidden: true,
  }, 
  { 
    row: 0,
    col: 2,
    isMine: false,
    hidden: true,
  }, 
  { 
    row: 1,
    col: 0,
    isMine: false,
    hidden: true,
  },
  { 
    row: 1,
    col: 1,
    isMine: false,
    hidden: true,
  }, 
  { 
    row: 1,
    col: 2,
    isMine: false,
    hidden: true,
  },
  { 
    row: 2,
    col: 0,
    isMine: false,
    hidden: true, 
  }, 
  { 
    row: 2,
    col: 1,
    isMine: false,
    hidden: true,
  },
  { 
    row: 2,
    col: 2,
    isMine: false,
    hidden: true,
  },
]
};


function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}

