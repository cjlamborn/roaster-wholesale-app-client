'use strict'

const getFormFields = require('../lib/get-form-fields.js')

$('#sign-up-form').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const bookData = getFormFields(form)
  console.log(bookData) // returned JavaScript object
})

$('#sign-in-form').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const bookData = getFormFields(form)
  console.log(bookData) // returned JavaScript object
})

$('#change-password-form').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const bookData = getFormFields(form)
  console.log(bookData) // returned JavaScript object
})
