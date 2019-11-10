const GeoPoint = require('geopoint');

/**
 * Get the distance between two geographical locations (lat, long coordinates).
 * @param {Double} lat1
 * @param {Double} long1
 * @param {Double} lat2
 * @param {Double} long2
 * @returns {Double} distance in miles
 */
module.exports.getDistanceBetween = async (lat1, long1, lat2, long2) => {
  const point1 = new GeoPoint(lat1, long1);
  const point2 = new GeoPoint(lat2, long2);

  return point1.distanceTo(point2, false);
};
