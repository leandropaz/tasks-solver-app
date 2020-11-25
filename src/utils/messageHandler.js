// for fancy colored logs on terminal!
const chalk = require('chalk');

const errorLog = chalk.inverse.red.bold;
const log = chalk.inverse.green.bold;

const messageHandler = (message) => {
  const { config, data, status } = message || {};
  if (config) {
    console.log(`-> ${config.url}:`);
  }
  switch (status) {
    case 200:
      console.log(log('Success'));
      if (data) {
        console.log(data);
      }
      break;
    case 400:
      console.warn(errorLog(data || 'Value is invalid'));
      break;
    case 404:
      console.warn(errorLog(data || 'Value not found for specified ID'));
      break;
    case 503:
      console.error(errorLog(data || 'Error communicating with database'));
      break;
    default:
      console.error(errorLog(data || 'An undefined error occurred!'));
      break;
  }
};

module.exports = { messageHandler };
