const express = require("express");

const router = express.Router();

// Home page route.
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

router.get("/login", (req, res) => {
  res.send("About this wiki");
});

router.get("/signup", (req, res) => {
  res.send("About this wiki");
});

router.get("/contact", (req, res) => {
  res.send("About this wiki");
});

router.get("/privary", (req, res) => {
  res.send("About this wiki");
});


router.get("*", (req, res) => {
  res.send("About this wiki");
});

router.get("/401", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
