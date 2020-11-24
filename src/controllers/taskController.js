const api = require('../api/api');
const { calculations } = require('../utils/taskHandler');

const getTask = async () => {
  const url = '/get-task';
  try {
    const response = await api.get(url);

    const result = calculations(response.data);
    return {
      response,
      data: {
        id: response.data.id,
        result,
      },
    };
  } catch (error) {
    throw new Error(error);
  }
};

const submitTask = async (data) => {
  const url = '/submit-task';
  try {
    const { id, result } = data || {};
    console.log(`Result: ${result}`);
    const response = await api.post(url, { id, result });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getTask, submitTask };
