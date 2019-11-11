/* eslint-disable no-undef */
const { expect } = require('chai');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const fs = require('fs');
const users = require('../src/users');
const config = require('../src/config');

const mock = new MockAdapter(axios);

const mockedUsers = JSON.parse(fs.readFileSync(`${__dirname}/mock/users.json`));

describe('getUsers', () => {
  it('Should return object array of users', async () => {
    // Arrange
    mock.onGet('https://bpdts-test-app.herokuapp.com/users').reply(200, mockedUsers);
    // Act
    const response = await users.getUsers();
    // Assert
    expect(response).to.equal(mockedUsers);
    expect(response).to.be.an('array');
  });
});

describe('getUsersByCity', () => {
  it('Should return object array of users within a radius of a location', async () => {
    // Arrange
    const data = JSON.parse(fs.readFileSync(`${__dirname}/mock/cityLondon.json`));
    mock.onGet('https://bpdts-test-app.herokuapp.com/city/London/users').reply(200, data);
    // Act
    const response = await users.getUsersByCity('London');
    // Assert
    expect(response).to.eql(data);
    expect(response).to.be.an('array');
  });
});

describe('getUsersNearLocation', () => {
  it('Should return object array of users within a radius of a location', async () => {
    // Arrange
    const expected = JSON.parse(fs.readFileSync(`${__dirname}/mock/coordinatesLondon.json`));
    mock.onGet('https://bpdts-test-app.herokuapp.com/users').reply(200, mockedUsers);
    // Act
    const response = await users.getUsersNearLocation(config.london, 50);
    // Assert
    expect(response).to.eql(expected);
    expect(response).to.be.an('array');
  });
});
