'use strict'

const config = require('./config')
// require store so we have access to our `token`
// so the API knows who we are
const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createNewGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (Index, Value, Over) {
  const gameDataInfo = {
    game: {
      cell: {
        index: Index,
        value: Value
      },
      over: false
    }
  }

  const overGameData = {
    game: {
      over: true
    }
  }

  if (Over === 'false') {
    return $.ajax({
      method: 'PATCH',
      url: config.apiUrl + '/games/' + store.game.id,
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: gameDataInfo
    })
  } else if (Over === 'true') {
    return $.ajax({
      method: 'PATCH',
      url: config.apiUrl + '/games/' + store.game.id,
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: overGameData
    })
  }
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createNewGame,
  updateGame
}
