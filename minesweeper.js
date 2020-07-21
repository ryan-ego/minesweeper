document.addEventListener('DOMContentLoaded', startGame)
// Build a board of individual cells grouped into rows and columns
// Build functions to open/flag/mine cells (booleans?)
// Build a function to randomly place mines
// Build the ancilary functions (mine count+counter)

// Define your `board` object here!

// var myObject = {};  (Object literal (preferred way))
// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method
// define the board object, one by one or write a for loop?
// add property names (keys)to the object called board

// function makeBoard(){
//  board.cells = [];
//   for (let x = 0; x < grid; x++) {
//    for(let y = 0; y < grid; y++) {
//        let cell = {s
//          row: x,
//          col: y,
//        }
//    board.cells.push(cell);
//    }
//  }
//  }


// function Board (boardSize, mineCount)
// {
//    var board = {}
//    for( var row=0; row < boardsize; row++ )
//    {
//      for( var column = 0; column < boardSize; column++ )
//      {
//        board[row + "" + column] = Cell ( row, column );
//      }
//    }
//    board = randomlyAssignMines( board, mineCount );
//    board = calculateNeighborMinecounts( board, boardSize );
//  }

//  refractor activity, turn the individuals below into a group like one of the two above

//  what function will decide the value of the final three keys in the board object?
var board = {
  cells: [{ 
    row: 0,
    col: 0,
    isMine: false,
    isMarked: false,
    hidden: true,
  }, 
  { 
    row: 0,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true,
  }, 
  { 
    row: 0,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
  }, 
  { 
    row: 1,
    col: 0,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  { 
    row: 1,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true,
  }, 
  { 
    row: 1,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  { 
    row: 2,
    col: 0,
    isMine: false,
    isMarked: false,
    hidden: true,
  }, 
  { 
    row: 2,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  { 
    row: 2,
    col: 2,
    isMine: true,
    isMarked: false,
    hidden: true,
  },
]
};


// The varriable "board" is an {object}.
// "cells" is a property of that {object}.  
// The "cells" property is made up of an [array] of {objects}.
// for (start point; condition; step)
// board.cells.length is part of the condition
// 1 write for loop = board.cells[i] is the index of the board cells

// 2 call countSurroundingMines once for each cell in board.cells

//3 assign result of countSurrroundingMines to a property called surroundingMines.

// inside the for loop we need to create a new key for each of our objects inside our array of cells.
// board.cells[i].surroundingMines this will create/add this key and its resulting value
// after we need to define the function countSurroundingMines

// Would like to talk through the below 3 lines of code
function startGame () {
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  
  
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
  lib.displayMessage('You win!')
}



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.


// getSurroundingCells function was already written for us, in lib
// create a varriable named 'count', set it to 0.
// increase 1 each time .isMine == true  (count+1)??
// run a for loop across the 'surrounding.length'
// if statement inside the for loop.


// Would like to talk through the code below
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;
  for (let i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine == true){
    count++;
    }
  }
  return count;  
}

