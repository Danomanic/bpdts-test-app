/* eslint-disable no-undef */
const { expect } = require('chai');

describe('getDistanceBetween', () => {
  it('Should return an distance between two geo locations', async () => {
    // Arrange
    const lat1 = 1234;
    const lon1 = 5678;
    const lat2 = 0;
    const lon2 = 0;
    // Act
    const response = distance.getDistanceBetween(lat1, lon1, lat2, lon2);
    // Assert
    expect(response).to.equal(data);
  });
});
