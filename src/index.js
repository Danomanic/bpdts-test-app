const _ = require('lodash');
const express = require('express');
const users = require('../src/users');
const config = require('../src/config');

const app = express();
const port = 3000;

/**
 * Get's a list of users with either City = London, or within a 50 mile radius of London.
 */
app.get('/v1/users/london', async (req, res) => {
  // Get all users who's city is London
  const cityLondon = await users.getUsersByCity('London');

  // Get all users whos coordinates are within 50 miles on London
  const coordinatesLondon = await users.getUsersNearLocation(config.london, 50);

  // Combine the two arrays and remove duplicates
  const combined = _.union(cityLondon, coordinatesLondon);

  // Return list of users as JSON.
  return res.json(combined);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports.app = app;
