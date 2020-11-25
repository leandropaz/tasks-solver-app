const chalk = require('chalk');
const { messageHandler } = require('../src/utils/messageHandler');
const {
  result1,
  result2,
  result3,
  result4,
  result5,
} = require('./fixtures/data');

const log = chalk.inverse.green.bold;
const errorLog = chalk.inverse.red.bold;

afterEach(() => {
  jest.clearAllMocks();
});

test('Should log success and data on status 200 response from GET request', () => {
  messageHandler(result1);
  expect(global.console.log).toHaveBeenCalledWith(result1.data);
});

test('Should log colored success on status 200 response from GET request and null data', () => {
  messageHandler({ status: 200 });
  expect(global.console.log).toHaveBeenCalledWith(log('Success'));
});

test('Should log success and data on status 200 from response from POST request', () => {
  messageHandler(result2);
  expect(global.console.log).toHaveBeenCalledWith(result2.data);
});

test('Should log colored warn data on status 400 from response', () => {
  messageHandler(result3);
  expect(global.console.warn).toHaveBeenCalledWith(errorLog(result3.data));
});

test('Should log colored default message on status 400 from response', () => {
  messageHandler({ status: 400 });
  expect(global.console.warn).toHaveBeenCalledWith(
    errorLog('Value is invalid'),
  );
});

test('Should log colored warn data on status 404 from response', () => {
  messageHandler(result4);
  expect(global.console.warn).toHaveBeenCalledWith(errorLog(result4.data));
});

test('Should log colored default message on status 404 from response', () => {
  messageHandler({ status: 404 });
  expect(global.console.warn).toHaveBeenCalledWith(
    errorLog('Value not found for specified ID'),
  );
});

test('Should log colored error data on status 503 from response', () => {
  messageHandler(result5);
  expect(global.console.error).toHaveBeenCalledWith(errorLog(result5.data));
});

test('Should log colored default message on status 503 from response', () => {
  messageHandler({ status: 503 });
  expect(global.console.error).toHaveBeenCalledWith(
    errorLog('Error communicating with database'),
  );
});

test('Should log colored error data on unexpected status from response', () => {
  const data = 'Internal Server Error';
  messageHandler({ status: 500, data });
  expect(global.console.error).toHaveBeenCalledWith(errorLog(data));
});

test('Should log colored default message on unexpected status from response', () => {
  messageHandler({ status: 500 });
  expect(global.console.error).toHaveBeenCalledWith(
    errorLog('An undefined error occurred!'),
  );
});
