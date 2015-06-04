'use strict';

var colors = require('colors');
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');
var dateformat = require('dateformat');

module.exports = index['default'] = index.index = index; // eslint-disable-line dot-notation

/////
function index() {
  return plumber({ errorHandler: errorHandler });
}

function errorHandler(error) {

  var time = '[' + colors.grey(dateformat(new Date(), 'HH:MM:ss')) + ']';
  process.stdout.write(time + ' ');

  var fullMessage = `
    Found error in plugins **${error.plugin}**:
    ${error.message}
  `;

  notifier.notify({
    title: `Found error in plugin ${error.plugin}`,
    message: error.message,
  });

  fullMessage = colors.bgRed.white(fullMessage);

  console.log(fullMessage);
  return this;
}
