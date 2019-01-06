const request = require("request");

const apiKeys = require("../api/api-keys");

var geocodeAddress = address => {
  return new Promise((resolve, reject) => {
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
          reject("Cannot connect to servers.");
        } else if (body.info.statuscode !== 0) {
          reject("Unable to find the address.");
        } else {
          resolve({
            address: body.results[0].providedLocation.location,
            lat: body.results[0].locations[0].latLng.lat,
            lng: body.results[0].locations[0].latLng.lng
          });
        }
      }
    );
  });
};

geocodeAddress("Toruń")
  .then(location => console.log(JSON.stringify(location, null, 2)))
  .catch(errMsg => console.log(errMsg));
