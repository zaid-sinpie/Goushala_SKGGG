const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "donateList.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class FormEntries {
  constructor(
    firstName,
    lastName,
    phoneNumber,
    email, // Adjusted to match `req.body` field
    address,
    adhaarCardNumber,
    pan,
    donateRupees, // Consistent with `req.body`
    message
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email; // Update here too
    this.address = address;
    this.adhaarCardNumber = adhaarCardNumber;
    this.pan = pan;
    this.donateRupees = donateRupees;
    this.message = message;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
