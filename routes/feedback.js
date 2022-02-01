const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    return response.send('Speakers list');
  });

  router.post('/', (request, response) => {
    return response.send(`Feedback form posted`);
  });

  return router;
};
