const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// simple middleware for tracking how server is working
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;

  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("Unable to append to server.log");
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render("maintenance.hbs", {
//     pageTitle: "Maintenance"
//   });
// });

app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());
hbs.registerHelper("screemIt", text => text.toUpperCase());

app.get("/", (req, res) => {
  // res.send("<h1>Hello Express!</h1>");

  // res.send({
  //   name: "Sebastian",
  //   likes: ["books", "code"]
  // });

  res.render("home.hbs", {
    pageTitle: "Home Page",
    msgWelcome: "Welcome to the Home Page!"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle request."
  });
});

app.listen(3000, () => console.log("Server is up on port 3000."));
