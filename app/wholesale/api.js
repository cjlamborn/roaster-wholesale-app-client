'use strict'

const config = require('./../config')
const store = require('../store.js')
// make GET request to /books to get all books
// getting all of a resource is commonly called an index or list action
const index = function () {
  return $.ajax({
    url: config.apiUrl + '/wholesales',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make GET request to /wholesales/:id to get a single book
// getting a single resource is commonly called a show or retrieve action
const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/wholesales/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make DELETE request to /wholesales/:id to delete a single book
// deleting a single resource is commonly called a destroy action
const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/wholesales/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/wholesales/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/wholesales',
    method: 'POST',
    // include the book data that we will use to create the book
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
