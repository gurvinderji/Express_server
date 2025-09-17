const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is root api page");
});
app.get("/home", (req, res) => {
  res.send("Welcome to home page");
});
app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.listen(3000, () => {
  console.log("Server is listining on port 3000");
});
