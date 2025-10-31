require("dotenv").config();

// imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// setup
const app = express();

// middleware


// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Example running at port http://localhost:${process.env.PORT}`
  );
});
