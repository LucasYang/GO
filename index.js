const express = require("express");
const path = require("path");
const API_PORT = process.env.PORT || 3002;

// app configuration
const app = express();

// serve our static files
app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));