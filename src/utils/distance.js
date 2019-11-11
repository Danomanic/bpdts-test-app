const GeoPoint = require('geopoint');

/**
 * Get the distance between two geographical locations (lat, long coordinates).
 * @param {Double} lat1
 * @param {Double} long1
 * @param {Double} lat2
 * @param {Double} long2
 * @returns {Double} distance in miles
 */
module.exports.getDistanceBetween = async (firstLocation, secondLocation) => {
  const point1 = new GeoPoint(firstLocation.latitude, firstLocation.longitude);
  const point2 = new GeoPoint(secondLocation.latitude, secondLocation.longitude);

  return point1.distanceTo(point2, false);
};
