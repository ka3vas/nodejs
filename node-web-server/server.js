const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // res.send("<h1>Hello Express!</h1>");
  res.send({
    name: "Sebastian",
    likes: ["books", "code"]
  });
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle request."
  });
});

app.listen(3000);
