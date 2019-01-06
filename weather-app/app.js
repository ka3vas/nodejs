const yargs = require("yargs");
const request = require("request");

// const geocode = require("./geocode/geocode");

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: "address",
//       describe: "Address to fetch weather from.",
//       string: true
//     }
//   })
//   .help()
//   .alias("help", "h").argv;

// geocode.geocodeAddress(argv.address, (errMsg, res) => {
//   if (errMsg) {
//     console.log(errMsg);
//   } else {
//     console.log(JSON.stringify(res, null, 2));
//   }
// });

// faecca5be9fe21f7b17820000577155a

// log current temperature

request(
  {
    url: `https://api.darksky.net/forecast/faecca5be9fe21f7b17820000577155a/37.8267,-122.4233`,
    json: true
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
    } else {
      console.log("Unable to fetch weather.");
    }
  }
);
