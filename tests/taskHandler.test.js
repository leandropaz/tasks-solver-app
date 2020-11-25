const { calculations } = require('../src/utils/taskHandler');
const tasks = require('./fixtures/data');

test('Should multiply values correctly', () => {
  expect(calculations(tasks.taskOne)).toBe(-8.582721677826834e29);
});

test('Should add values correctly', () => {
  expect(calculations(tasks.taskTwo)).toBe(-12654494067778258);
});

test('Should divide values correctly', () => {
  expect(calculations(tasks.taskThree)).toBe(-0.4137362291506947);
});

test('Should calculate the remainder of values correctly', () => {
  expect(calculations(tasks.taskFour)).toBe(491148151499621);
});

test('Should return null for a non supported operation', () => {
  expect(calculations(tasks.taskFive)).toBeNull();

  // assert error message from handler:
  expect(global.console.error).toHaveBeenCalledWith('Operation not supported!');
});
