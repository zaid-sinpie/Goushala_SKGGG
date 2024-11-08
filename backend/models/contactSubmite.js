const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "contactList.json"
);

const getContactsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class ContactEntries {
  constructor(fullName, email, message) {
    this.fullName = fullName;
    this.email = email;
    this.message = message;
  }

  save() {
    getContactsFromFile((contacts) => {
      contacts.push(this);
      fs.writeFile(p, JSON.stringify(contacts), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getContactsFromFile(cb)
  }
};
