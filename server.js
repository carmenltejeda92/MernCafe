//----------------------------------------------Require
// Always require and configure near the top
require("dotenv").config();
// Connect to the database
require("./config/database");
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan"); //JSON request
const port = process.env.PORT || 3001;
const app = express();

//----------------------------------------------Midware
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
//----------------------------------------------Routes

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//----------------------------------------------Server
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
