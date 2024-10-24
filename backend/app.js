const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/product", (req, res, next) => {
  console.log("in the other middleware");
  res.send("<h1>This is the product page</h1>");
});

app.post("/donate", (req, res, next) => {
  console.log("In the doante middleware");
  const data = req.body;
  console.log(data);
  res.send({ message: "Data received successfully!" });
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello, World!</h1>");
  console.log("Hello from middleware");
});

app.listen(3000);
