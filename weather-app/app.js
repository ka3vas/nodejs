const request = require("request");

request(
  {
    url:
      "http://www.mapquestapi.com/geocoding/v1/address?key=oIZxoWu1f8NAVL6SSBde6h3JGsgdbeQJ&location=1301%20lombard%20street%20philadelphia",
    json: true
  },
  (error, response, body) => {
    console.log(body);
  }
);
