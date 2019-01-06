const request = require("request");

const apiKeys = require("../api/api-keys");

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${apiKeys.forecast}/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(null, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback("Unable to fetch weather.", null);
      }
    }
  );
};

module.exports.getWeather = getWeather;
