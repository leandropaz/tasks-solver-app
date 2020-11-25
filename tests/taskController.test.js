const { getTask, submitTask } = require('../src/controllers/taskController');
const { dummyTask } = require('./fixtures/data');

const realId = 'a4e4b5c1-c655-4040-8bb6-176d829133f1';

test('Should get a task and calculate its values', async () => {
  const task = await getTask();

  expect(task.data).not.toBeNull();

  expect(task.response).not.toBeNull();

  expect(task.response.status).toBe(200);

  // asserts that the response has id an result to be posted
  expect(task.data).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      result: expect.any(Number),
    }),
  );
});

test('Should post a correct result', async () => {
  const task = await getTask();
  const response = await submitTask(task.data);
  expect(response.status).toBe(200);
  expect(response.data).not.toBeNull();
  expect(response.data).toBe('Correct');
});

// this section was a tricky one! Gotta handle errors that were thrown and
// check the statuses codes via regex
test('Should throw an error and get a 404 status for an inexistent ID', async () => {
  await expect(submitTask(dummyTask)).rejects.toThrow(/404/);
});

test('Should throw an error and get a 400 status code for bad request', async () => {
  await expect(
    submitTask({
      id: realId,
      result: 480,
    }),
  ).rejects.toThrow(/400/);

  await expect(submitTask({ id: realId })).rejects.toThrow(/400/);

  await expect(submitTask()).rejects.toThrow(/400/);
});
