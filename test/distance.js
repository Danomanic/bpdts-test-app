/* eslint-disable no-undef */
const { expect } = require('chai');
const distance = require('../src/utils/distance');

describe('getDistanceBetween', () => {
  it('Should return an distance between two geo locations', async () => {
    // Arrange
    const expected = 391.1062577640764;
    const lat1 = -6.5115909;
    const long1 = 105.652983;
    const lat2 = -6.7098551;
    const long2 = 111.3479498;
    // Act
    const response = await distance.getDistanceBetween(lat1, long1, lat2, long2);
    // Assert
    expect(response).to.equal(expected);
  });
});
