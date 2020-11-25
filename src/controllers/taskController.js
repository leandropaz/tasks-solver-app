const api = require('../api/api');
const { calculations } = require('../utils/taskHandler');

function handleError(info) {
  const err = new Error(info);
  err.status = info.response.status;
  err.data = info.response.data;
  return err;
}

const getTask = async () => {
  const url = '/get-task';
  try {
    const response = await api.get(url);

    const result = calculations(response.data);
    const objReturn = {
      response,
      data: {
        id: response.data.id,
        result,
      },
    };
    return objReturn;
  } catch (error) {
    const parsedError = handleError(error);
    throw parsedError;
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
    const parsedError = handleError(error);
    throw parsedError;
  }
};

module.exports = { getTask, submitTask };
