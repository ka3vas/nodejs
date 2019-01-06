const request = require("request");

const apiKeys = require("../api/api-keys");

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
        apiKeys.geocode
      }&location=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Cannot connect to servers.");
      } else if (body.info.statuscode !== 0) {
        callback("Unable to find the address.");
      } else {
        callback(null, {
          address: body.results[0].providedLocation.location,
          lat: body.results[0].locations[0].latLng.lat,
          lng: body.results[0].locations[0].latLng.lng
        });
      }
    }
  );
};

module.exports = {
  geocodeAddress
};
