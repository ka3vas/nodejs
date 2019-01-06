const yargs = require("yargs");

const geocode = require("./geocode/geocode");

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
    console.log(JSON.stringify(res, null, 2));
  }
});

// faecca5be9fe21f7b17820000577155a
