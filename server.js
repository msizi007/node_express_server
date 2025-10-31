const admin = require("firebase-admin");
require("dotenv").config();

// imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const publicRouter = require("./routes/publicRoutes.js");

// Firebase automatically finds the credentials from the env variable
admin.initializeApp();

// Now you can access Firebase services
const db = admin.firestore();
const auth = admin.auth();
// setup
const app = express();
app.use("/public", publicRouter);
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.static("views"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// middleware
app.use(morgan("tiny"));

// routes
// app.get("/", async (req, res) => {
//   const snapshot = await db.collection("users").get();
//   const users = snapshot.docs.map((doc) => doc.data());
//   res.send(users);
// });

app.listen(process.env.PORT, () => {
  console.log(`Example running at port http://localhost:${process.env.PORT}`);
});
