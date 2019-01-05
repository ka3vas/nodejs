const request = require("request");
const yargs = require("yargs");

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
console.log(encodedAddress);

request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=oIZxoWu1f8NAVL6SSBde6h3JGsgdbeQJ&location=${encodedAddress}`,
    json: true
  },
  (error, response, body) => {
    console.log(`Address: ${body.results[0].providedLocation.location}`);
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
  }
);
