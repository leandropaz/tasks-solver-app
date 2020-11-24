const axios = require('axios');

const api = axios.create({
  baseURL: 'https://interview.adpeai.com/api/v1',
});

module.exports = api;
