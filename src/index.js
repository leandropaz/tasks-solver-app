const { getTask, submitTask } = require('./controllers/taskController');
const { messageHandler } = require('./utils/messageHandler');

const TIMES = 90; // number of times to repeat the 'separator' character =)

const work = async () => {
  try {
    const task = await getTask();
    messageHandler(task.response);
    const result = await submitTask(task.data);
    messageHandler(result);
    return true;
  } catch (error) {
    messageHandler(error);
    return false;
  }
};

async function start() {
  // linter doesn't like the true constant in while loop,
  // but it's ok with this one ¯\_(ツ)_/¯
  while (TIMES) {
    await work();
    console.log('-'.repeat(TIMES));
  }
}

start();
