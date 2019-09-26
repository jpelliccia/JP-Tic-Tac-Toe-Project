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

  let move = 0
  $('#box1').click(function () {
    if ($('#box1').text() === '') {
      if (move % 2 === 0) {
        $('#box1').text('X')
      }
      if (move % 2 === 1) {
        $('#box1').text('O')
      }
      move++
    }
  })
  $('#box2').click(function () {
    if ($('#box2').text() === '') {
      if (move % 2 === 0) {
        $('#box2').text('X')
      }
      if (move % 2 === 1) {
        $('#box2').text('O')
      }
      move++
    }
  })
  $('#box3').click(function () {
    if ($('#box3').text() === '') {
      if (move % 2 === 0) {
        $('#box3').text('X')
      }
      if (move % 2 === 1) {
        $('#box3').text('O')
      }
      move++
    }
  })
  $('#box4').click(function () {
    if ($('#box4').text() === '') {
      if (move % 2 === 0) {
        $('#box4').text('X')
      }
      if (move % 2 === 1) {
        $('#box4').text('O')
      }
      move++
    }
  })
  $('#box5').click(function () {
    if ($('#box5').text() === '') {
      if (move % 2 === 0) {
        $('#box5').text('X')
      }
      if (move % 2 === 1) {
        $('#box5').text('O')
      }
      move++
    }
  })
  $('#box6').click(function () {
    if ($('#box6').text() === '') {
      if (move % 2 === 0) {
        $('#box6').text('X')
      }
      if (move % 2 === 1) {
        $('#box6').text('O')
      }
      move++
    }
  })
  $('#box7').click(function () {
    if ($('#box7').text() === '') {
      if (move % 2 === 0) {
        $('#box7').text('X')
      }
      if (move % 2 === 1) {
        $('#box7').text('O')
      }
      move++
    }
  })
  $('#box8').click(function () {
    if ($('#box8').text() === '') {
      if (move % 2 === 0) {
        $('#box8').text('X')
      }
      if (move % 2 === 1) {
        $('#box8').text('O')
      }
      move++
    }
  })
  $('#box9').click(function () {
    if ($('#box9').text() === '') {
      if (move % 2 === 0) {
        $('#box9').text('X')
      }
      if (move % 2 === 1) {
        $('#box9').text('O')
      }
      move++
    }
  })

  getWinner()
  if (winner) {
    return ('Player ' + winner + ' won!')
  };
})
