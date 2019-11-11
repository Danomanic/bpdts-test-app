/* eslint-disable no-undef */
const { expect } = require('chai');
const distance = require('../src/utils/distance');

describe('getDistanceBetween', () => {
  it('Should return an distance between two geo locations', async () => {
    // Arrange
    const expected = 391.1062577640764;
    const firstLocation = { latitude: -6.5115909, longitude: 105.652983 };
    const secondLocation = { latitude: -6.7098551, longitude: 111.3479498 };
    // Act
    const response = await distance.getDistanceBetween(firstLocation, secondLocation);
    // Assert
    expect(response).to.equal(expected);
  });
});
