const { getTask, submitTask } = require('./controllers/taskController');
const { messageHandler } = require('./utils/messageHandler');

const TIMES = 90; // number of times to repeat the 'separator' character =)

const work = async () => {
  try {
    const data = await getTask();
    messageHandler(data.response);
    const result = await submitTask(data.data);
    messageHandler(result);
    return true;
  } catch (error) {
    messageHandler(error.response);
    return false;
  }
};

async function start() {
  while (TIMES) { // bypassing no-constant-condition linter =P
    await work();
    console.log('-'.repeat(TIMES));
  }
}

start();
