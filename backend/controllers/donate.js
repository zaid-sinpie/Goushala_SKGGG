const Donations = require("../models/formSubmit");

exports.donateFormSubmite = (req, res, next) => {
  console.log("In the donate middleware");
  const data = req.body;

  const donations = new Donations(
    data.firstName,
    data.lastName,
    data.phoneNumber,
    data.email,
    data.address,
    data.adhaarCardNumber,
    data.pan,
    data.donateRupees,
    data.message
  );

  // console.log(data);

  donations.save();
  res.send({ message: "Data received successfully!" });
};

exports.getAlldoantions = (req, res, next) => {
  Donations.fetchAll((email) => {
    console.log(email);
  });
};
