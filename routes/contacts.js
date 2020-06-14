const express = require("express");
const router = express.Router();

// @router    GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @router    POST api/contacts
// @desc      Add new contact
// @access    Private
router.post("/", (req, res) => {
  res.send("Add Contact");
});

// @router    PUT api/contacts/:id
// @desc      Update contact
// @access    Private
router.put("/:id", (req, res) => {
  res.send("Update Contacts");
});

// @router    DELETE api/contacts/:id
// @desc      Delete Contact
// @access    Private
router.delete("/", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
