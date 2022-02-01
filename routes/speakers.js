const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    return response.send('Speakers list');
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Deatail page of ${request.params.shortname}`);
  });

  return router;
};
