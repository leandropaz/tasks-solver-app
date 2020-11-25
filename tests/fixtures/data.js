global.console = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

const dummyTask = {
  id: '1234',
  result: 50,
};

const taskOne = {
  operation: 'multiplication',
  left: -1255824542813675,
  right: 683433185546545,
};

const taskTwo = {
  operation: 'addition',
  left: -3978568156597515,
  right: -8675925911180743,
};

const taskThree = {
  operation: 'division',
  left: 1213954722636573,
  right: -2934127197728231,
};

const taskFour = {
  operation: 'remainder',
  left: 491148151499621,
  right: -1641289317459059,
};

const taskFive = {
  operation: 'power',
  left: -1026676825012371,
  right: 1982867618316133,
};

const data1 = {
  id: '228946eb-9ac4-4e0f-bb39-eb3530b677d4',
  operation: 'addition',
  left: -4769446156020279,
  right: -3140415769808271,
};

const result1 = {
  status: 200,
  'config.url': '/get-mocked-task',
  data: data1,
};

const result2 = {
  status: 200,
  'config.url': '/post-mocked-task',
  data: 'Correct',
};

const result3 = {
  status: 400,
  'config.url': '/post-mocked-task',
  data: 'Incorrect result.',
};

const result4 = {
  status: 404,
  'config.url': '/post-mocked-task',
  data: 'Unable to find any value associated with that ID.',
};

const result5 = {
  status: 503,
  'config.url': '/post-mocked-task',
  data: 'Error communicating with database.',
};

module.exports = {
  dummyTask,
  taskOne,
  taskTwo,
  taskThree,
  taskFour,
  taskFive,
  result1,
  result2,
  result3,
  result4,
  result5,
};
