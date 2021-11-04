//this is the beginning board
var data = ['','','','','','','','','']

var squares = document.getElementsByClassName('square')
var xTurn = true
var addX = function(event){
  if (winner === '') {
    if (xTurn) {
      event.target.innerText = "X"
    } else {
      event.target.innerText = "O"
    }
    xTurn = !xTurn

    var squareNumber = event.target.className.split(' ')[1]
    // var row = Math.floor(squareNumber/3)
    // var column = squareNumber%3
    // data[row][column] = event.target.innerText
    // winningBoard()
    data[squareNumber] = event.target.innerText
    winninigOpportunities()
    var winnerId = document.getElementById('winner')
    var outcome
    if (winner === 'X') {
      outcome = document.createTextNode("Player X Won!");
      winnerId.appendChild(outcome);
    }
    if (winner === 'O') {
      outcome = document.createTextNode("Player O Won!");
      winnerId.appendChild(outcome);
    }
    if (!data.includes('')){
      outcome = document.createTextNode("Tie!");
      winnerId.appendChild(outcome);
    }
  }
}





for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', addX, {once: true})
}




var didSomeoneWin = false;
var winner = '';
var winninigOpportunities = function(){

  if ((data[0] === 'X' && data[1] === 'X' && data[2] === 'X')||
  (data[3] === 'X' && data[4] === 'X' && data[5] === 'X')||
  (data[6] === 'X' && data[7] === 'X' && data[8] === 'X')||

  (data[0] === 'X' && data[3] === 'X' && data[6] === 'X')||
  (data[1] === 'X' && data[4] === 'X' && data[7] === 'X')||
  (data[2] === 'X' && data[5] === 'X' && data[8] === 'X')||

  (data[0] === 'X' && data[4] === 'X' && data[8] === 'X')||
  (data[2] === 'X' &&data[4] === 'X' && data[6] === 'X')) {
    didSomeoneWin = true;
    winner = 'X'
  }

  if ((data[0] === 'O' && data[1] === 'O' && data[2] === 'O')||
  (data[3] === 'O' && data[4] === 'O' && data[5] === 'O')||
  (data[6] === 'O' && data[7] === 'O' && data[8] === 'O')||

  (data[0] === 'O' && data[3] === 'O' && data[6] === 'O')||
  (data[1] === 'O' && data[4] === 'O' && data[7] === 'O')||
  (data[2] === 'O' && data[5] === 'O' && data[8] === 'O')||

  (data[0] === 'O' && data[4] === 'O' && data[8] === 'O')||
  (data[2] === 'O' &&data[4] === 'O' && data[6] === 'O')) {
    didSomeoneWin = true;
    winner = 'O'
  }

}

var resetButton = document.getElementById('resetButton')
var reset = function(){
  data = ['','','','','','','','','']
  winner = ''
  console.log(winner)

}

resetButton.addEventListener('click', reset)








// var winningBoard = function() {
//   var winnerDeclared = false;

//   var winningRow = function() {
//     var row = 0
//     while (row < 3) {
//       if ((data[row][0] === "X" && data[row][1] === 'X' && data[row][2] === "X") ||
//       (data[row][0] === "O" && data[row][1] === 'O' && data[row][2] === "O")) {
//         winnerDeclared = true;
//       } else {
//         row++
//       }
//     }
//   }

//   var winningColumn = function() {
//     var column = 0
//     while (column < 3) {
//       if ((data[0][column] === "X" && data[1][column] === 'X' && data[2][column] === "X") ||
//       (data[0][column] === "O" && data[1][column] === 'O' && data[2][column] === "O")) {
//         winnerDeclared = true;
//       } else {
//         column++
//       }
//     }
//   }

//   var winningDiagonal = function(){
//     if((data[0][0] === 'X' && data[1][1] === 'X' && data[2][2] === 'X') ||
//     (data[0][0] === 'O' && data[1][1] === 'O' && data[2][2] === 'O')
//     ) {
//       winnerDeclared = true;
//     }
//   }


//   winningRow()
//   winningColumn()
//   winningDiagonal()
//   console.log(winnerDeclared)
// }
