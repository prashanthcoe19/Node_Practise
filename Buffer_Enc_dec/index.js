const express = require("express");
const app = express();

let encode = require("./encode");
let decode = require("./decode");

const base64 = encode.enc("Hey Man!");
console.log(`The string Hey Man! is converted to base64 ${base64}`);
const utf8 = decode.dec(base64);
console.log(`The base54 is converted back to ${utf8}`);

app.get("/", (req, res) => {
  res.send(`Hey Man! is decoded to ${base64} and encoded back to ${utf8}`);
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});

// encode.enc("Hey Man!");
