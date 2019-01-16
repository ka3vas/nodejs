const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
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
