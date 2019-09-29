'use strict'

// require store object, so we can save the user
// and their token
const store = require('./store')
// const authEvents = require('./events.js')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
}

const onSignUpFailure = function (response) {
  failureMessage('Sign up failed')
  console.log(response)
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  console.log('responseData is', responseData)
  // save the `user` we got from the API inside of `store`
  // so we can use it later, from any file
  store.user = responseData.user
  console.log('store is', store)
  $('#tacBoard').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function (response) {
  failureMessage('Change password failed')
  console.log(response)
}

const onSignOutSuccess = function (response) {
  successMessage('Signed out successfully!')
  $('#tacBoard').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  location.reload()
}

const onSignOutFailure = function (response) {
  failureMessage('Sign out failed')
  console.log(response)
}

const onCreateNewGameSuccess = function (responseData) {
  successMessage('Created new game!')
  store.game = responseData.game
  console.log('store is ' + store)
  console.log(responseData)
}

const onCreateNewGameFailure = function () {
  failureMessage('Created new game!')
}

const onUpdateGameSuccess = function (responseData) {
  successMessage('Updated game!')
  store.game = responseData.game
  console.log(responseData)
  console.log('store is ', store.game)
}

const onUpdateGameFailure = function () {
  failureMessage('Failed to update')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateNewGameSuccess,
  onCreateNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
