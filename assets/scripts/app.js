'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#NewGame').on('click', function () {
    onNewGame()
    authEvents.onCreateNewGame()
  })

  $('#tacBoard').hide()
  $('#change-password').hide()
  $('#sign-out').hide()

  let playerDraw = 0
  let move = 0
  let tacBoard = ['', '', '', '', '', '', '', '', '']
  const checkWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  // --------------------^^Local Data Variables^^-------------------------------
  // const getWinningIndex = function (currentPlayer) {
  //   const winningIndex = []
  //   for (let i = 0; i < tacBoard.length; i++) {
  //     if (tacBoard[i] === currentPlayer) {
  //       $('#box' + i).addClass('win')
  //     }
  //   }
  // }
  const toCheckWin = function (currentPlayer) {
    // console.log(checkWins[0])
    for (let i = 0; i < checkWins.length; i++) {
      const firstNumber = checkWins[i][0]
      const secondNumber = checkWins[i][1]
      const thirdNumber = checkWins[i][2]
      if (tacBoard[firstNumber] === 'X' || tacBoard[firstNumber] === 'O') {
        if (tacBoard[secondNumber] === tacBoard[thirdNumber] && tacBoard[firstNumber] === tacBoard[secondNumber]) {
          for (let j = 1; j < 10; j++) {
            $('#box' + j).off('click')
          }
          console.log('Win')
          $('#message-to-player').text('Player ' + tacBoard[firstNumber] + ' has won!')
          // $('#box' + (firstNumber + 1)).addClass('win')
          // $('#box' + (secondNumber + 1)).addClass('win')
          // $('#box' + (thirdNumber + 1)).addClass('win')
          authEvents.onUpdateGame('', '', 'true')
          console.log(move, 'moves')
          playerDraw = 1
        }
      }
    }
    // -------------------------------------------------------------------------
    if (move === 8) {
      if (playerDraw === 0) {
        $('#message-to-player').text('Tie Game!')
        authEvents.onUpdateGame('', '', 'true')
        console.log(move, 'Tie')
      }
    }
    playerDraw = 0
  }
  // ---------------------------------------------------------------------------

  const onNewGame = function () {
    for (let n = 1; n < 10; n++) {
      $('#box' + n).text('')
    }
    tacBoard = ['', '', '', '', '', '', '', '', '']
    $('#message-to-player').text('New Game! Player X begins!')
    playerDraw = 0
    move = 0
    addClickOnBox()
  }
  $('#NewGame').on('click', onNewGame)
  // ---------------------------------------------------------------------------

  const addClickOnBox = function () {
    // for (let i = 1; i < 10; i++) {
    //   $('#box' + i).click(function () {
    //     if (move % 2 === 0) {
    //       $('#box' + i).text('X')
    //       $('#message-to-player').text("Player O's turn")
    //       tacBoard[i - 1] = 'X'
    //       move++
    //       toCheckWin()
    //       console.log(tacBoard)
    //       console.log(move)
    //     } else {
    //       $('#box' + i).text('O')
    //       $('#message-to-player').text("Player X's turn")
    //       tacBoard[i - 1] = 'O'
    //       move++
    //       toCheckWin()
    //       console.log(tacBoard)
    //       console.log(move)
    //     }
    //   })
    // }

  // -----------------^^For Loop code for simplification^^----------------------
  // --If using this code must change move in playerDraw = to 9 instead of 8----
    $('#box1').click(function () {
      if ($('#box1').text() === '') {
        if (move % 2 === 0) {
          $('#box1').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[0] = 'X'
          authEvents.onUpdateGame(0, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box1').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[0] = 'O'
          authEvents.onUpdateGame(0, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })

    $('#box2').click(function () {
      if ($('#box2').text() === '') {
        if (move % 2 === 0) {
          $('#box2').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[1] = 'X'
          authEvents.onUpdateGame(1, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box2').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[1] = 'O'
          authEvents.onUpdateGame(1, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })
    $('#box3').click(function () {
      if ($('#box3').text() === '') {
        if (move % 2 === 0) {
          $('#box3').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[2] = 'X'
          authEvents.onUpdateGame(2, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box3').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[2] = 'O'
          authEvents.onUpdateGame(2, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })
    $('#box4').click(function () {
      if ($('#box4').text() === '') {
        if (move % 2 === 0) {
          $('#box4').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[3] = 'X'
          authEvents.onUpdateGame(3, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box4').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[3] = 'O'
          authEvents.onUpdateGame(3, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })
    $('#box5').click(function () {
      if ($('#box5').text() === '') {
        if (move % 2 === 0) {
          $('#box5').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[4] = 'X'
          authEvents.onUpdateGame(4, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box5').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[4] = 'O'
          authEvents.onUpdateGame(4, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })
    $('#box6').click(function () {
      if ($('#box6').text() === '') {
        if (move % 2 === 0) {
          $('#box6').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[5] = 'X'
          authEvents.onUpdateGame(5, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box6').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[5] = 'O'
          authEvents.onUpdateGame(5, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })
    $('#box7').click(function () {
      if ($('#box7').text() === '') {
        if (move % 2 === 0) {
          $('#box7').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[6] = 'X'
          authEvents.onUpdateGame(6, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box7').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[6] = 'O'
          authEvents.onUpdateGame(6, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })
    $('#box8').click(function () {
      if ($('#box8').text() === '') {
        if (move % 2 === 0) {
          $('#box8').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[7] = 'X'
          authEvents.onUpdateGame(7, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box8').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[7] = 'O'
          authEvents.onUpdateGame(7, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })
    $('#box9').click(function () {
      if ($('#box9').text() === '') {
        if (move % 2 === 0) {
          $('#box9').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[8] = 'X'
          authEvents.onUpdateGame(8, 'X', 'false')
          toCheckWin('X')
          console.log(tacBoard)
          console.log(move)
        }
        if (move % 2 === 1) {
          $('#box9').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[8] = 'O'
          authEvents.onUpdateGame(8, 'O', 'false')
          toCheckWin('O')
          console.log(tacBoard)
          console.log(move)
        }
        move++
      }
    })
  }

  const runGame = function () {
    addClickOnBox()
  }
  runGame()
})
