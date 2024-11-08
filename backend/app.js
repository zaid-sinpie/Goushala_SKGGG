const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const formSubmitControllers = require("./controllers/donate");
const contactSubmitController = require("./controllers/contact");

const app = express();

// setting up
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/donate", formSubmitControllers.donateFormSubmite);

app.post("/contact", contactSubmitController.allContactsubmissions);

app.use("/", (req, res, next) => {
  res.send("<h1>Hello, World!</h1>");
  console.log("Hello from middleware");
});

app.listen(3000);
