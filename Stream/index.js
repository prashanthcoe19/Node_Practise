const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.get("/", (req, res) => {
  try {
    let readStream = fs.createReadStream(__dirname + "/display.html");
    readStream.pipe(res);
  } catch (err) {
    throw err;
  }
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server started at port ${PORT}`);
});
