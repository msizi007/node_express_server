const express = require("express");
const path = require("path");

const router = express.Router();

// Home page route.
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

router.get("/login", (req, res) => {
  res.send("About this wiki");
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Done");
});

router.get("/contact", (req, res) => {
  res.send("About this wiki");
});

router.get("/privary", (req, res) => {
  res.send("About this wiki");
});

// router.get("*", (req, res) => {
//   res.send("About this wiki");
// });

router.get("/401", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
