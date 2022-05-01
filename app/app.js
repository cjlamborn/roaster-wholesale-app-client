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
    $('.tab-two').show()
    $('#signin').toggle('slide')
  })
  // $('#sign').on('click', function () {
  //   $('.tab-one').hide()
  //   $('.tab-two').hide()
  //   $('.tab-three').show()
  //   $('.tab-four').show()
  //   $('#front-page').show()
  //   $('#view-account').show()
  //   $('#sign-in-form').toggle('slide')
  //   $('body').css('background-image', 'none')
  //   $('body').css('background-color', 'rgb(169, 145, 211)')
  //   $('#intro').hide()
  // })
  $('.tab-three').on('click', function () {
    $('.tab-three').show()
    $('#change').toggle('slide')
  })
  $('#view-account').on('click', function () {
    $('#view-account').hide()
    $('#app-display').show()
    $('#new-account').show()
  })
  $('#new-account').on('click', function () {
    $('#create-wholesale').toggle()
  })
  // $('.tab-four').on('click', function () {
  //   $('.tab-one').show()
  //   $('.tab-two').show()
  //   if ($('.tab-four').text() === 'Sign Out') {
  //     // This block is executed when
  //     // you click the show button
  //     $('.tab-four').text(' ')
  //   }
  //   $('.tab-three').hide()
  //   $('#app-display').hide()
  //   $('#new-account').hide()
  //   $('#front-page').hide()
  //   $('#view-account').hide()
  // })
  $('#new-account').on('click', function () {
    if ($('#new-account').text() === 'New Wholesale Account') {
      // This block is executed when
      // you click the show button
      $('#new-account').text('Close')
      $('#create-wholesale').show()
    } else {
      // This block is executed when
      // you click the hide button
      $('#new-account').text('New Wholesale Account')
      $('#create-wholesale').hide()
    }
  })
})
