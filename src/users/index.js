const axios = require('axios');
const config = require('../config');
const distance = require('../utils/distance');

module.exports.getUsers = async () => new Promise((resolve, reject) => {
  axios.get(`${config.base}/users`).then((response) => {
    resolve(response.data);
  })
    .catch((error) => {
      reject(error);
    });
});

module.exports.getUsersNearLocation = async (location, radius) => {
  const users = await this.getUsers();

  const matched = [];
  users.forEach(async (user) => {
    const between = await distance.getDistanceBetween(location, user);
    if (between <= radius) {
      matched.push(user);
    }
  });

  return new Promise((resolve) => {
    resolve(matched);
  });
};
