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

  $('#tacBoard').hide()
  $('#change-password').hide()
  $('#sign-out').hide()

  let playerDraw = 0
  let move = 0
  let tacBoard = ['', '', '', '', '', '', '', '', '']
  const checkWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  // -----------------------------^^Local Data^^--------------------------------
  const toCheckWin = function () {
    // console.log(checkWins[0])
    for (let i = 0; i < checkWins.length; i++) {
      const firstNumber = checkWins[i][0]
      const secondNumber = checkWins[i][1]
      const thirdNumber = checkWins[i][2]
      // console.log(firstNumber, secondNumber, thirdNumber)
      if (tacBoard[firstNumber] === 'X' || tacBoard[firstNumber] === 'O') {
        if (tacBoard[secondNumber] === tacBoard[thirdNumber] && tacBoard[firstNumber] === tacBoard[secondNumber]) {
          for (let j = 1; j < 10; j++) {
            $('#box' + j).off('click')
          }
          console.log('Win')
          $('#message-to-player').text('Player ' + tacBoard[firstNumber] + ' has won!')
          console.log(move, 'moves')
          playerDraw = 1
        }
      }
    }
    // -------------------------------------------------------------------------
    if (move === 8) {
      if (playerDraw === 0) {
        $('#message-to-player').text('Tie Game!')
        console.log(move, 'Tie')
      }
    }
    // -------------------------------------------------------------------------
  }

  const onNewGame = function () {
    // $('#box1').text('')
    for (let n = 1; n < 10; n++) {
      $('#box' + n).text('')
    }
    tacBoard = ['', '', '', '', '', '', '', '', '']
    $('#message-to-player').text('New Game! Player X begins!')
    addClickOnBox()
    playerDraw = 0
    move = 0
  }
  $('#NewGame').on('click', onNewGame)
  // ---------------------------------------------------------------------------

  const addClickOnBox = function () {
    $('#box1').click(function () {
      if ($('#box1').text() === '') {
        if (move % 2 === 0) {
          $('#box1').text('X')
          $('#message-to-player').text("Player O's turn")
          tacBoard[0] = 'X'
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box1').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[0] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box2').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[1] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box3').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[2] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box4').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[3] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box5').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[4] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box6').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[5] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box7').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[6] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box8').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[7] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
          toCheckWin()
          console.log(tacBoard)
        }
        if (move % 2 === 1) {
          $('#box9').text('O')
          $('#message-to-player').text("Player X's turn")
          tacBoard[8] = 'O'
          toCheckWin()
          console.log(tacBoard)
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
