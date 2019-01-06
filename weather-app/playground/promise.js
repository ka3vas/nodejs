var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey! It worked.");
    // reject("Unable to fulfill promise.");
  }, 2500);
});

somePromise.then(
  msg => console.log("Success: ", msg),
  errMsg => console.log("Error: ", errMsg)
);
