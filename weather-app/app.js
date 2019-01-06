const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

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

geocode.geocodeAddress(argv.address, (errMsg, res) => {
  if (errMsg) {
    console.log(errMsg);
  } else {
    // console.log(JSON.stringify(res, null, 2));
    console.log(res.address);
    const { lat, lng } = res;

    weather.getWeather(lat, lng, (errMsg, weatherRes) => {
      if (errMsg) {
        console.log(errMsg);
      } else {
        // console.log(JSON.stringify(weatherRes, null, 2));
        const { temperature, apparentTemperature } = weatherRes;
        console.log(
          `Its currently ${temperature}, but it feels like ${apparentTemperature}`
        );
      }
    });
  }
});
