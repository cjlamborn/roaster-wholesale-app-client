'use strict'

const onIndexSuccess = function (responseData) {
  // extract the books from the response's data into a variable
  const wholesales = responseData.wholesales

  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)

  // create a string that will store the html for all of the books we want to
  // display on the page. Start as an empty string.
  let wholesalesHtml = ''

  // loop through each book from the API
  wholesales.forEach((wholesale) => {
    // add (concatenate) the book html for each book, to the booksHtml string
    //
    // when adding the delete button add a data-id attribute, with the id of the
    // button we want to delete
    // add a data-id attribute for our dynamic edit form as well
    wholesalesHtml += `
      <h4>Name: ${wholesale.name}</h4>
      <p>Location: ${wholesale.location}</p>
      <p>Roasts: ${wholesale.roasts}</p>
      <p>Amount: ${wholesale.amount}</p>
      <p>ID: ${wholesale._id}</p>
      <form class="wholesale-update-dynamic" data-id=${wholesale._id}>
        <input type="text" name="wholesale[name]" placeholder="name" required>
        <input type="text" name="wholesale[location]" placeholder="location" required>
        <input type="text" name="wholesale[roasts]" placeholder="roasts" required>
        <input type="text" name="wholesale[amount]" placeholder="amount" required>
        <button type="submit">Update Account</button>
      </form>
      <button class='wholesale-delete-dynamic' data-id=${wholesale._id}>Delete Account</button>
      <br>
    `
  })

  // set the html for all of our books all at once
  $('#wholesale-display').html(wholesalesHtml)
}

const onShowSuccess = function (responseData) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)

  // build HTML element with data for one book
  const wholesaleHtml = `
    <h4>Name: ${responseData.wholesale.name}</h4>
    <p>Location: ${responseData.wholesale.location}</p>
    <p>Roasts: ${responseData.wholesale.roasts}</p>
    <p>Amount: ${responseData.wholesale.amount}</p>
    <br>
  `

  // replace whatever was in the books-display element with our bookHtml
  $('#wholesale-display').html(wholesaleHtml)

  // reset all forms
  $('form').trigger('reset')
}

const onDeleteSuccess = function () {
  // add success message to our books-destroy-message element
  $('#delete-account-message').html('Wholesale account successfully deleted!')

  // empty out the books-display element in case it was displaying information
  // about the book we just deleted, replace with a message for the user to get
  // all the books again.
  $('#wholesale-display').html(
    'Wholesales have changed! Click "Get All" again to see all the accounts'
  )

  // add class for success messaging
  $('#delete-account-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#delete-account-message').html('')
    $('#delete-account-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  // add success message to our books-update-message element
  $('#wholesale-update-message').html('You successfully updated this wholesale account')

  // empty out the books-display element in case it was displaying information
  // about the book we just updated, replace with a message for the user to get
  // all the books again.
  $('#wholesale-display').html(
    'Wholesales have changed! Click "Get All" again to see all the accounts.'
  )

  // add class for success messaging
  $('#wholesale-update-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#wholesale-update-message').html('')
    $('#wholesale-update-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onCreateSuccess = function () {
  // add success message to content
  $('#wholesale-create-message').html('You created a new wholesale account!')

  // we just created a new book!
  // we can add a message to let the users know they should request all of
  // the books again to see the newly created book included
  $('#wholesale-display').html(
    'Wholesales have changed! Click "Get All" again to see all the accounts.'
  )

  // add class for success messaging
  $('#wholesale-create-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#wholesale-create-message').html('')
    $('#wholesale-create-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onError = function (err) {
  // log the error for debugging purposes
  console.error(err)

  // display a message to the user to let them know what they were doing did
  // not work correctly
  $('#error-message').html('Something went wrong, please try again.')

  // add class for error messaging
  $('#error-message').addClass('failure')

  // use setTimeout to allow the error message to stay for 5 seconds before
  // the message is replaced with '' and the 'failure' class is removed
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
