var assyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers!");
      }
    }, 1500);
  });
};

assyncAdd(10, 3)
  .then(res => {
    console.log(res);
    return assyncAdd(res, 7);
  })
  .then(res => console.log(res))
  .catch(errMsg => console.log(errMsg));

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey! It worked.");
//     // reject("Unable to fulfill promise.");
//   }, 2500);
// });

// somePromise.then(
//   msg => console.log("Success: ", msg),
//   errMsg => console.log("Error: ", errMsg)
// );
