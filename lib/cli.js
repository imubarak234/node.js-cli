/**
 * CLI-Related Tasks
 */

// Dependencies 
const readLine = require('readLine');
const util = require('util');
const debug = util.debuglog('cli');
const events = require('events');
class _events extends events{};
let e = new _events();

// Instantiate the CLI module object
const cli = {};

// Init script
cli.init = () => {
  // Send the start message to the console, in dark blue
};

// Export the module
module.exports = cli;