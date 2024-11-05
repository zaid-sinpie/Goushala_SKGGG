const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const allFormEntries = [];

// setting up
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// middlewares
app.post("/donate", (req, res, next) => {
  console.log("In the donate middleware");
  const data = req.body;
  console.log(data);
  res.send({ message: "Data received successfully!" });
});

app.post("/contact", (req, res, next) => {
  console.log("In the contact middleware");
  const data = req.body;
  allFormEntries.push(data);
  console.log(allFormEntries);
  res.send({ message: "Data received successfully!" });
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello, World!</h1>");
  console.log("Hello from middleware");
});

app.listen(3000);
