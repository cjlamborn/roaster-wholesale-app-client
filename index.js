// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// styles
require('./app/styles/index.scss')
// const targetClick = document.getElementById('when-signed-in')
// const butn = document.getElementById('sign')
// butn.onclick = function () {
//   if (targetClick.style.display !== 'none') {
//     targetClick.style.display = 'flex'
//   }
// }
