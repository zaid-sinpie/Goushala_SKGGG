const ContactEntries = require("../models/contactSubmite");

exports.allContactsubmissions = (req, res, next) => {
  const { fullName, email, message } = req.body;
  const contacts = new ContactEntries(fullName, email, message);
  contacts.save();
  res.send({ message: "Data received successfully!" });
};

exports.fetchAllContacts = (req, res, next) => {
  ContactEntries.fetchAllContacts((contact) => {
    console.log(contact);
  });
};
