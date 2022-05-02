'use strict'

const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://polar-river-27993.herokuapp.com/sign-up',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://polar-river-27993.herokuapp.com/sign-in',
    data
    // same as data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://polar-river-27993.herokuapp.com/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
    // same as data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://polar-river-27993.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
