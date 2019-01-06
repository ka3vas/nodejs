const yargs = require("yargs");
const axios = require("axios");

const apiKeys = require("./api/api-keys");
const { geocode, forecast } = apiKeys;

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather from.",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${geocode}&location=${encodedAddress}`;

axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data.info.statuscode !== 0) {
      throw new Error("Unable to find that address.");
    }

    const { lat, lng } = response.data.results[0].locations[0].latLng;
    const { location } = response.data.results[0].providedLocation;
    const weatherUrl = `https://api.darksky.net/forecast/${forecast}/${lat},${lng}`;

    console.log(location);
    return axios.get(weatherUrl);
  })
  .then(response => {
    const { temperature, apparentTemperature } = response.data.currently;
    console.log(
      `Its currently ${temperature}, but it feels like ${apparentTemperature}.`
    );
  })
  .catch(err => {
    if (err.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers.");
    } else {
      console.log(err.message);
    }
  });
