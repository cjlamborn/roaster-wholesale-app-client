// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const wholesaleEvents = require('./wholesale/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#wholesale-index').on('click', wholesaleEvents.onIndexWholesale)
  $('#show-account').on('submit', wholesaleEvents.onShowWholesale)
  $('#delete-account').on('submit', wholesaleEvents.onDeleteWholesale)
  $('#update-account').on('submit', wholesaleEvents.onUpdateWholesale)
  $('#create-wholesale').on('submit', wholesaleEvents.onCreateWholesale)
  $('.tab-one').on('click', function () {
    $('.tab-one').show()
    $('#signup').toggle('slide')
  })
  $('.tab-two').on('click', function () {
    $('.tab-one').show()
    $('#signin').toggle('slide')
  })
  $('#sign').on('click', function () {
    $('.tab-three').show()
    $('.tab-four').show()
    $('#front-page').show()
    $('#sign-in-form').toggle('slide')
  })
  $('.tab-three').on('click', function () {
    $('.tab-three').show()
    $('#change').toggle('slide')
  })
})
